/**
 * The connected children, on disk, on the parent's own machine.
 *
 * Each child's KRÉTA password is encrypted with AES-256-GCM under the master
 * key (see masterKey.ts); the rest of the record — the name the parent uses,
 * the KRÉTA username, the institute — is stored in the clear so a parent can
 * read and audit the file without any tooling.
 *
 * The password is stored rather than a token pair on purpose. KRÉTA's refresh
 * tokens rotate and expire, and a desktop extension that only runs while
 * Claude is open cannot keep one alive. Signing in again from a stored
 * password is what makes the extension work after a week of not being used —
 * and on the parent's own machine, keeping their own password is the same
 * bargain any password manager offers.
 */
import { createCipheriv, createDecipheriv, randomBytes, randomUUID } from "node:crypto";
import { readFileSync, renameSync, writeFileSync } from "node:fs";
import { childrenFile } from "./paths.js";
import { loadOrCreateMasterKey, type KeyStorageKind } from "./masterKey.js";

const FORMAT_VERSION = 1;
const IV_BYTES = 12;

interface SealedValue {
  iv: string;
  tag: string;
  data: string;
}

/** One child, as the rest of the extension sees it: no password. */
export interface StoredChild {
  id: string;
  /** The name the parent uses when talking to Claude. */
  label: string;
  username: string;
  instituteCode: string;
  instituteName?: string;
  addedAt: number;
}

interface ChildRecord extends StoredChild {
  password: SealedValue;
}

interface FileShape {
  version: number;
  children: ChildRecord[];
}

export interface NewChild {
  label: string;
  username: string;
  password: string;
  instituteCode: string;
  instituteName?: string;
}

export class StoreError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "StoreError";
  }
}

function seal(key: Buffer, plaintext: string, aad: string): SealedValue {
  const iv = randomBytes(IV_BYTES);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  cipher.setAAD(Buffer.from(aad, "utf8"));
  const data = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  return {
    iv: iv.toString("base64"),
    tag: cipher.getAuthTag().toString("base64"),
    data: data.toString("base64"),
  };
}

function open(key: Buffer, value: SealedValue, aad: string): string {
  const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(value.iv, "base64"));
  decipher.setAAD(Buffer.from(aad, "utf8"));
  decipher.setAuthTag(Buffer.from(value.tag, "base64"));
  return Buffer.concat([
    decipher.update(Buffer.from(value.data, "base64")),
    decipher.final(),
  ]).toString("utf8");
}

/** Binds a sealed password to its own record, so entries cannot be swapped. */
function passwordAad(record: Pick<StoredChild, "id" | "username" | "instituteCode">): string {
  return `${record.id}|${record.username}|${record.instituteCode}`;
}

export class ChildStore {
  private records: ChildRecord[];

  private constructor(
    private readonly path: string,
    private readonly key: Buffer,
    readonly keyStorage: KeyStorageKind,
    records: ChildRecord[],
  ) {
    this.records = records;
  }

  /** Opens the store, creating the master key and an empty file on first run. */
  static async open(path: string = childrenFile()): Promise<ChildStore> {
    const { key, storage } = await loadOrCreateMasterKey();
    return new ChildStore(path, key, storage, ChildStore.read(path));
  }

  /** For tests: a store with an explicit key and no platform key storage. */
  static withKey(path: string, key: Buffer): ChildStore {
    return new ChildStore(path, key, "file", ChildStore.read(path));
  }

  private static read(path: string): ChildRecord[] {
    let raw: string;
    try {
      raw = readFileSync(path, "utf8");
    } catch {
      return [];
    }
    let parsed: FileShape;
    try {
      parsed = JSON.parse(raw) as FileShape;
    } catch {
      throw new StoreError(`A beállításfájl (${path}) sérült. Nevezd át, és vedd fel újra a gyerekeket.`);
    }
    if (parsed.version !== FORMAT_VERSION || !Array.isArray(parsed.children)) {
      throw new StoreError(`A beállításfájl (${path}) ismeretlen formátumú.`);
    }
    return parsed.children;
  }

  private write(): void {
    const body = JSON.stringify({ version: FORMAT_VERSION, children: this.records }, null, 2);
    // Write-then-rename: a crash mid-write leaves the previous file intact.
    const temporary = `${this.path}.tmp`;
    writeFileSync(temporary, `${body}\n`, { mode: 0o600 });
    renameSync(temporary, this.path);
  }

  /** Every child, password excluded, in the order they were added. */
  list(): StoredChild[] {
    return this.records.map(({ password: _password, ...child }) => child);
  }

  find(label: string): StoredChild | undefined {
    const wanted = label.trim().toLowerCase();
    return this.list().find((child) => child.label.toLowerCase() === wanted);
  }

  /** The stored password for one child, decrypted for a single sign-in. */
  password(id: string): string {
    const record = this.records.find((child) => child.id === id);
    if (!record) throw new StoreError("Ez a gyerek már nincs beállítva.");
    try {
      return open(this.key, record.password, passwordAad(record));
    } catch {
      throw new StoreError(
        `${record.label} tárolt jelszava nem nyitható meg. Vedd fel újra a gyereket.`,
      );
    }
  }

  /** Adds a child, or replaces the entry that already uses that name. */
  add(input: NewChild): StoredChild {
    const label = input.label.trim();
    if (!label) throw new StoreError("A gyerek nevét meg kell adni.");

    const existing = this.find(label);
    const id = existing?.id ?? randomUUID();
    const record: ChildRecord = {
      id,
      label,
      username: input.username.trim(),
      instituteCode: input.instituteCode,
      ...(input.instituteName ? { instituteName: input.instituteName } : {}),
      addedAt: existing?.addedAt ?? Date.now(),
      password: seal(
        this.key,
        input.password,
        passwordAad({ id, username: input.username.trim(), instituteCode: input.instituteCode }),
      ),
    };

    this.records = [...this.records.filter((child) => child.id !== id), record];
    this.write();
    const { password: _password, ...stored } = record;
    return stored;
  }

  /** Removes a child by the name the parent uses. Returns what was removed. */
  remove(label: string): StoredChild | undefined {
    const target = this.find(label);
    if (!target) return undefined;
    this.records = this.records.filter((child) => child.id !== target.id);
    this.write();
    return target;
  }
}
