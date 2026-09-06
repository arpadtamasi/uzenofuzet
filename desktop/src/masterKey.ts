/**
 * The master key that encrypts the stored KRÉTA passwords.
 *
 * The key is 32 random bytes, generated once. Where it is kept is the only
 * platform-specific part of this extension:
 *
 *   - macOS: the login keychain, via the `security` tool;
 *   - Windows: DPAPI (CurrentUser scope), sealed next to the data file;
 *   - Linux: the Secret Service, via `secret-tool`, when one is running;
 *   - anywhere else, or when none of those work: an owner-only file.
 *
 * The file fallback is honest obfuscation, not protection: anything that can
 * read the key file can read the data file beside it. `describeKeyStorage`
 * exists so the setup page and `kreta_login` can say which case applies
 * rather than implying a guarantee that is not there.
 *
 * Only this random key is ever handed to a platform tool. A KRÉTA password
 * never is — on macOS a command-line argument is briefly visible to other
 * processes, which is tolerable for a random key written once and not for a
 * credential the parent chose.
 */
import { execFile } from "node:child_process";
import { randomBytes } from "node:crypto";
import { chmodSync, readFileSync, writeFileSync } from "node:fs";
import { promisify } from "node:util";
import { masterKeyFile } from "./paths.js";

const run = promisify(execFile);

export const KEY_BYTES = 32;
const SERVICE = "Uzenofuzet";
const ACCOUNT = "master-key";

export type KeyStorageKind = "keychain" | "dpapi" | "libsecret" | "file";

export function describeKeyStorage(kind: KeyStorageKind): string {
  switch (kind) {
    case "keychain":
      return "a macOS kulcstartóban";
    case "dpapi":
      return "a Windows felhasználói fiókjához kötve (DPAPI)";
    case "libsecret":
      return "a rendszer kulcstárolójában";
    case "file":
      return "egy csak általad olvasható fájlban (a gépeden nincs elérhető kulcstároló)";
  }
}

interface Backend {
  kind: KeyStorageKind;
  load(): Promise<Buffer | null>;
  save(key: Buffer): Promise<void>;
}

const macosKeychain: Backend = {
  kind: "keychain",
  async load() {
    try {
      const { stdout } = await run("security", [
        "find-generic-password", "-s", SERVICE, "-a", ACCOUNT, "-w",
      ]);
      const key = Buffer.from(stdout.trim(), "base64");
      return key.length === KEY_BYTES ? key : null;
    } catch {
      return null;
    }
  },
  async save(key) {
    await run("security", [
      "add-generic-password", "-U", "-s", SERVICE, "-a", ACCOUNT,
      "-D", "Üzenőfüzet master key", "-w", key.toString("base64"),
    ]);
  },
};

/** Runs a PowerShell snippet, passing and receiving base64 on stdin/stdout. */
async function powershell(script: string, input: string): Promise<string> {
  const child = run("powershell", ["-NoProfile", "-NonInteractive", "-Command", script]);
  child.child.stdin?.end(input);
  const { stdout } = await child;
  return stdout.trim();
}

const windowsDpapi: Backend = {
  kind: "dpapi",
  async load() {
    let sealed: string;
    try {
      sealed = readFileSync(masterKeyFile(), "utf8").trim();
    } catch {
      return null;
    }
    try {
      const plain = await powershell(
        "$b=[Convert]::FromBase64String((Read-Host));" +
          "Add-Type -AssemblyName System.Security;" +
          "[Convert]::ToBase64String([System.Security.Cryptography.ProtectedData]::Unprotect($b,$null,'CurrentUser'))",
        sealed,
      );
      const key = Buffer.from(plain, "base64");
      return key.length === KEY_BYTES ? key : null;
    } catch {
      return null;
    }
  },
  async save(key) {
    const sealed = await powershell(
      "$b=[Convert]::FromBase64String((Read-Host));" +
        "Add-Type -AssemblyName System.Security;" +
        "[Convert]::ToBase64String([System.Security.Cryptography.ProtectedData]::Protect($b,$null,'CurrentUser'))",
      key.toString("base64"),
    );
    writeFileSync(masterKeyFile(), `${sealed}\n`, { mode: 0o600 });
    chmodSync(masterKeyFile(), 0o600);
  },
};

const libsecret: Backend = {
  kind: "libsecret",
  async load() {
    try {
      const { stdout } = await run("secret-tool", ["lookup", "service", SERVICE, "account", ACCOUNT]);
      const key = Buffer.from(stdout.trim(), "base64");
      return key.length === KEY_BYTES ? key : null;
    } catch {
      return null;
    }
  },
  async save(key) {
    // secret-tool reads the secret from stdin, so the key never becomes an argument.
    const child = run("secret-tool", [
      "store", "--label=Üzenőfüzet master key", "service", SERVICE, "account", ACCOUNT,
    ]);
    child.child.stdin?.end(key.toString("base64"));
    await child;
  },
};

const plainFile: Backend = {
  kind: "file",
  async load() {
    try {
      const key = Buffer.from(readFileSync(masterKeyFile(), "utf8").trim(), "base64");
      return key.length === KEY_BYTES ? key : null;
    } catch {
      return null;
    }
  },
  async save(key) {
    writeFileSync(masterKeyFile(), `${key.toString("base64")}\n`, { mode: 0o600 });
    chmodSync(masterKeyFile(), 0o600);
  },
};

function preferredBackend(env: NodeJS.ProcessEnv = process.env): Backend {
  // An escape hatch for a machine whose keychain prompts or misbehaves, and
  // for tests that must not touch the real one.
  if (env.UZENOFUZET_KEY_STORAGE === "file") return plainFile;
  if (process.platform === "darwin") return macosKeychain;
  if (process.platform === "win32") return windowsDpapi;
  return libsecret;
}

export interface MasterKey {
  key: Buffer;
  storage: KeyStorageKind;
}

/**
 * Returns the master key, generating and storing one on first run.
 *
 * A platform store that cannot be reached is not an error: the extension
 * falls back to the key file and reports which case happened, so the parent
 * is told what protects their data instead of being stopped.
 */
export async function loadOrCreateMasterKey(): Promise<MasterKey> {
  for (const backend of [preferredBackend(), plainFile]) {
    const existing = await backend.load();
    if (existing) return { key: existing, storage: backend.kind };
  }

  const key = randomBytes(KEY_BYTES);
  const backend = preferredBackend();
  try {
    await backend.save(key);
    return { key, storage: backend.kind };
  } catch {
    await plainFile.save(key);
    return { key, storage: plainFile.kind };
  }
}
