import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";
import type { AddressInfo } from "node:net";
import { after, test } from "node:test";
import { createApp } from "../src/app.js";
import { loadConfig } from "../src/config.js";

const config = loadConfig({ TOKEN_SEALING_KEY: randomBytes(32).toString("base64") } as NodeJS.ProcessEnv);
const queries: string[] = [];
const server = createApp({
  config,
  verifyFirebaseIdToken: async (token) => {
    if (token === "anna-token") return { uid: "anna-uid", name: "Anna Példa" };
    throw new Error("invalid token");
  },
  searchInstitutes: async (query) => {
    queries.push(query);
    if (query === "hiba") throw new Error("upstream unavailable");
    return [{ code: "klik034802001", name: "Budenz József Általános Iskola és Gimnázium" }];
  },
}).listen(0);
const base = `http://127.0.0.1:${(server.address() as AddressInfo).port}`;
after(() => void server.close());

function instituteRequest(q: string, token?: string) {
  return fetch(`${base}/api/institutes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    body: JSON.stringify({ q }),
  });
}

test("institution search requires Google identity and a useful query", async () => {
  assert.equal((await instituteRequest("budenz")).status, 401);
  assert.equal((await instituteRequest("bu", "anna-token")).status, 400);
});

test("a verified parent receives cached institution suggestions", async () => {
  const first = await instituteRequest(" Budenz ", "anna-token");
  assert.equal(first.status, 200);
  assert.deepEqual(await first.json(), {
    suggestions: [{ code: "klik034802001", name: "Budenz József Általános Iskola és Gimnázium" }],
  });
  assert.equal((await instituteRequest("budenz", "anna-token")).status, 200);
  assert.deepEqual(queries, ["Budenz"]);
});

test("upstream failure keeps manual institution-code entry available", async () => {
  const response = await instituteRequest("hiba", "anna-token");
  assert.equal(response.status, 502);
  assert.match(((await response.json()) as { error: string }).error, /kézzel is beírhatod/u);
});
