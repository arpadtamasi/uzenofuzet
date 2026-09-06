/**
 * Wires the shared KRÉTA tool table to locally stored credentials.
 *
 * Each child gets one sign-in per access-token lifetime: the token lives in
 * this process's memory and is thrown away when Claude closes the extension.
 * Nothing is persisted but the encrypted password, so there is no long-lived
 * token to leak, revoke, or resurrect — the credential's lifetime is the
 * conversation's.
 *
 * Refresh tokens are deliberately not used. They rotate, they expire while
 * the extension is not running, and a stale one fails in the middle of a
 * question. Signing in again from the stored password is both simpler and
 * more reliable, and it is the only reason the extension still works after a
 * fortnight of not being opened.
 */
import { KretaClient, login, type KretaTokens } from "@uzenofuzet/core/kreta";
import { ToolError, type KretaBackend } from "@uzenofuzet/core/mcp";
import { describeKeyStorage } from "./masterKey.js";
import { dataDirectory } from "./paths.js";
import { StoreError, type ChildStore, type StoredChild } from "./store.js";

/** Re-authenticate this long before the access token expires. */
const RENEW_MARGIN_MS = 90_000;

interface CachedSession {
  client: KretaClient;
  expiresAt: number;
}

export class DesktopBackend implements KretaBackend<StoredChild> {
  private readonly sessions = new Map<string, CachedSession>();

  constructor(private readonly store: ChildStore) {}

  children(): StoredChild[] {
    return this.store.list();
  }

  async clientFor(child: StoredChild): Promise<KretaClient> {
    const cached = this.sessions.get(child.id);
    if (cached && cached.expiresAt - RENEW_MARGIN_MS > Date.now()) return cached.client;

    let password: string;
    try {
      password = this.store.password(child.id);
    } catch (error) {
      throw new ToolError(error instanceof StoreError ? error.message : "A tárolt jelszó nem olvasható.");
    }

    let tokens: KretaTokens;
    try {
      tokens = await login({
        username: child.username,
        password,
        instituteCode: child.instituteCode,
      });
    } catch {
      // The stored password is the likeliest cause, and the parent can fix
      // that themselves — say so instead of reporting a protocol failure.
      throw new ToolError(
        `${child.label} KRÉTA-belépése nem sikerült. Ha megváltozott a jelszava, vedd fel újra a "kreta_add_child" toollal.`,
      );
    }

    const expiresAt = Date.now() + tokens.expiresIn * 1000;
    const client = new KretaClient({
      instituteCode: child.instituteCode,
      refreshToken: tokens.refreshToken,
      accessToken: tokens.accessToken,
      accessExpiresAt: expiresAt,
      // This client never refreshes: a fresh sign-in replaces it instead.
      allowRefresh: false,
      refreshDeniedMessage: "A KRÉTA-munkamenet lejárt. Kérdezd meg újra.",
    });
    this.sessions.set(child.id, { client, expiresAt });
    return client;
  }

  describeConnection(child: StoredChild): Record<string, unknown> {
    return {
      credential: "password",
      password_stored: true,
      password_storage: `AES-256-GCM titkosítással a gépeden, a kulcs ${describeKeyStorage(this.store.keyStorage)}`,
      token_storage: "csak ennek a folyamatnak a memóriájában, a Claude bezárásáig",
      server_in_chain: false,
      institution_name: child.instituteName ?? null,
      data_directory: dataDirectory(),
      connected_at: new Date(child.addedAt).toISOString(),
    };
  }

  /** Drops cached sign-ins for a child that was removed or re-added. */
  forget(childId: string): void {
    this.sessions.delete(childId);
  }
}
