/**
 * A one-shot HTTP server, bound to the loopback interface, that serves the
 * setup page and takes exactly one child's details.
 *
 * It is addressable only from this machine, only with the random token in the
 * URL, and only until the parent finishes or the window times out. Every
 * request is checked for both, and the `Host` header is checked too, so a
 * page on some other site cannot reach it by pointing a hostname at
 * 127.0.0.1.
 */
import { createServer, type IncomingMessage, type Server, type ServerResponse } from "node:http";
import { randomBytes, timingSafeEqual } from "node:crypto";
import type { AddressInfo } from "node:net";
import { HttpSession, KretaError, login, normalizeInstituteCode } from "@uzenofuzet/core/kreta";
import { searchKretaInstitutes } from "@uzenofuzet/core/institutes";
import { describeKeyStorage } from "../masterKey.js";
import { StoreError, type ChildStore, type StoredChild } from "../store.js";
import { setupPage } from "./page.js";

const MAX_BODY_BYTES = 8_192;

export interface SetupWindow {
  /** The address to open in a browser. */
  url: string;
  /** Resolves with the saved child, or null if the window closed unused. */
  finished: Promise<StoredChild | null>;
  close(): void;
}

function equalTokens(a: string, b: string): boolean {
  const left = Buffer.from(a);
  const right = Buffer.from(b);
  return left.length === right.length && timingSafeEqual(left, right);
}

function sendJson(response: ServerResponse, status: number, body: unknown): void {
  const payload = JSON.stringify(body);
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
  });
  response.end(payload);
}

async function readJsonBody(request: IncomingMessage): Promise<Record<string, unknown>> {
  const chunks: Buffer[] = [];
  let size = 0;
  for await (const chunk of request) {
    size += (chunk as Buffer).length;
    if (size > MAX_BODY_BYTES) throw new Error("too_large");
    chunks.push(chunk as Buffer);
  }
  const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString("utf8"));
  if (typeof parsed !== "object" || parsed === null) throw new Error("not_an_object");
  return parsed as Record<string, unknown>;
}

function requiredString(body: Record<string, unknown>, key: string, label: string): string {
  const value = body[key];
  if (typeof value !== "string" || !value.trim()) {
    throw new StoreError(`Hiányzó mező: ${label}.`);
  }
  return value.trim();
}

export interface SetupOptions {
  store: ChildStore;
  /** Pre-fills the name when the parent is fixing one child's password. */
  label?: string;
  /** How long the window stays open. */
  timeoutMs?: number;
  fetchImpl?: typeof fetch;
}

/**
 * Opens the setup window and returns its address. The caller decides whether
 * to launch a browser and how long to wait.
 */
export async function openSetupWindow(options: SetupOptions): Promise<SetupWindow> {
  const token = randomBytes(24).toString("base64url");
  const { store } = options;
  const timeoutMs = options.timeoutMs ?? 10 * 60_000;
  const fetchImpl = options.fetchImpl ?? fetch;

  let settle: (child: StoredChild | null) => void;
  const finished = new Promise<StoredChild | null>((resolve) => {
    settle = resolve;
  });

  let server: Server;
  let timer: NodeJS.Timeout;
  let closed = false;
  const close = (child: StoredChild | null): void => {
    if (closed) return;
    closed = true;
    clearTimeout(timer);
    server.close();
    settle(child);
  };

  server = createServer((request, response) => {
    void handle(request, response).catch(() => {
      sendJson(response, 500, { error: "Váratlan hiba a beállító oldalon." });
    });
  });

  const handle = async (request: IncomingMessage, response: ServerResponse): Promise<void> => {
    const address = server.address() as AddressInfo;
    const host = request.headers.host ?? "";
    // Only the loopback address this window advertises is accepted; a name
    // that merely resolves to 127.0.0.1 is not.
    if (host !== `127.0.0.1:${address.port}`) {
      sendJson(response, 403, { error: "Érvénytelen cím." });
      return;
    }

    const url = new URL(request.url ?? "/", `http://127.0.0.1:${address.port}`);
    if (!equalTokens(url.searchParams.get("t") ?? "", token)) {
      sendJson(response, 403, { error: "Ez a beállító link már nem érvényes." });
      return;
    }

    if (request.method === "GET" && url.pathname === "/") {
      response.writeHead(200, {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
        // The page loads nothing from anywhere, and nothing may frame it.
        "content-security-policy":
          "default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; connect-src 'self'; form-action 'none'; frame-ancestors 'none'",
        "referrer-policy": "no-referrer",
      });
      response.end(
        setupPage({
          token,
          ...(options.label ? { label: options.label } : {}),
          keyStorage: describeKeyStorage(store.keyStorage),
        }),
      );
      return;
    }

    if (request.method === "GET" && url.pathname === "/institutes") {
      const query = (url.searchParams.get("q") ?? "").trim();
      if (query.length < 3) {
        sendJson(response, 200, { suggestions: [] });
        return;
      }
      try {
        sendJson(response, 200, { suggestions: await searchKretaInstitutes(query, fetchImpl) });
      } catch {
        sendJson(response, 502, { error: "Az iskolakereső nem érhető el." });
      }
      return;
    }

    if (request.method === "POST" && url.pathname === "/save") {
      let body: Record<string, unknown>;
      try {
        body = await readJsonBody(request);
      } catch {
        sendJson(response, 400, { error: "Értelmezhetetlen űrlapadat." });
        return;
      }

      let saved: StoredChild;
      try {
        const label = requiredString(body, "label", "a gyerek neve");
        const username = requiredString(body, "username", "KRÉTA felhasználónév");
        const password = requiredString(body, "password", "KRÉTA jelszó");
        const instituteCode = normalizeInstituteCode(requiredString(body, "institute_code", "iskola"));
        const instituteName = typeof body.institute_name === "string" ? body.institute_name : undefined;

        // Prove the credential works before it is written anywhere. A typo is
        // caught here, in front of the parent, not at their first question.
        await login({ username, password, instituteCode }, new HttpSession(fetchImpl));

        saved = store.add({
          label,
          username,
          password,
          instituteCode,
          ...(instituteName ? { instituteName } : {}),
        });
      } catch (error) {
        const message =
          error instanceof KretaError || error instanceof StoreError
            ? error.message
            : "Nem sikerült elmenteni a gyereket.";
        sendJson(response, 400, { error: message });
        return;
      }

      sendJson(response, 200, { label: saved.label });
      // Let the browser render the confirmation before the socket goes away.
      setTimeout(() => close(saved), 250);
      return;
    }

    sendJson(response, 404, { error: "Ismeretlen útvonal." });
  };

  await new Promise<void>((resolve) => {
    server.listen(0, "127.0.0.1", resolve);
  });
  timer = setTimeout(() => close(null), timeoutMs);
  timer.unref?.();

  const { port } = server.address() as AddressInfo;
  return {
    url: `http://127.0.0.1:${port}/?t=${token}`,
    finished,
    close: () => close(null),
  };
}
