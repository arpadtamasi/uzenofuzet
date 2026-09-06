/**
 * Where the extension keeps its state on the parent's own machine.
 *
 * One directory per platform convention, created with owner-only permissions.
 * Nothing here ever leaves the machine.
 */
import { homedir } from "node:os";
import { join } from "node:path";
import { mkdirSync } from "node:fs";

export const APP_DIR_NAME = "Uzenofuzet";

/** The per-user data directory, created if it does not exist yet. */
export function dataDirectory(env: NodeJS.ProcessEnv = process.env): string {
  const override = env.UZENOFUZET_DATA_DIR;
  const directory = override
    ? override
    : process.platform === "darwin"
      ? join(homedir(), "Library", "Application Support", APP_DIR_NAME)
      : process.platform === "win32"
        ? join(env.APPDATA ?? join(homedir(), "AppData", "Roaming"), APP_DIR_NAME)
        : join(env.XDG_CONFIG_HOME ?? join(homedir(), ".config"), "uzenofuzet");

  // 0o700: on a shared machine, another account cannot even list the contents.
  mkdirSync(directory, { recursive: true, mode: 0o700 });
  return directory;
}

export function childrenFile(env?: NodeJS.ProcessEnv): string {
  return join(dataDirectory(env), "children.json");
}

export function masterKeyFile(env?: NodeJS.ProcessEnv): string {
  return join(dataDirectory(env), "master.key");
}
