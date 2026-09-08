import assert from "node:assert/strict";
import { randomBytes } from "node:crypto";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { request as httpRequest } from "node:http";
import { test } from "node:test";
import { openSetupWindow } from "../src/setup/server.js";
import { ChildStore } from "../src/store.js";

const PASSWORD = "helyes-jelszo";

/**
 * A raw request, because `fetch` refuses to let a caller set `Host` — which
 * is exactly the header the DNS-rebinding check is about.
 */
function rawGet(url: string, host: string): Promise<number> {
  const target = new URL(url);
  return new Promise((resolve, reject) => {
    const req = httpRequest(
      { hostname: "127.0.0.1", port: target.port, path: target.pathname + target.search, headers: { host } },
      (res) => {
        res.resume();
        res.on("end", () => resolve(res.statusCode ?? 0));
      },
    );
    req.on("error", reject);
    req.end();
  });
}

function freshStore(): ChildStore {
  return ChildStore.withKey(
    join(mkdtempSync(join(tmpdir(), "uzenofuzet-")), "children.json"),
    randomBytes(32),
  );
}

/** Stands in for the KRÉTA IDP: the authorize page, the form POST, the token. */
function kretaMock(): { fetch: typeof fetch; passwordsSeen: string[] } {
  const passwordsSeen: string[] = [];
  let state = "";

  const impl: typeof fetch = async (input, init) => {
    const url = String(input);

    if (url.startsWith("https://idp.e-kreta.hu/connect/authorize")) {
      state = new URL(url).searchParams.get("state") ?? state;
      return new Response(
        `<form method="POST" action="https://idp.e-kreta.hu/account/login">
           <input name="ReturnUrl" value="/connect/authorize?resume=1">
         </form>`,
        { status: 200, headers: { "content-type": "text/html" } },
      );
    }

    if (url === "https://idp.e-kreta.hu/account/login") {
      const body = new URLSearchParams(String(init?.body ?? ""));
      passwordsSeen.push(body.get("Password") ?? "");
      if (body.get("Password") !== PASSWORD) {
        // A wrong password re-renders the form: no code comes back.
        return new Response("<html><body>hibás jelszó</body></html>", { status: 200 });
      }
      return new Response("", {
        status: 302,
        headers: {
          location: `https://mobil.e-kreta.hu/ellenorzo-student/prod/oauthredirect?code=kod&state=${state}`,
        },
      });
    }

    if (url === "https://idp.e-kreta.hu/connect/token") {
      return new Response(
        JSON.stringify({ access_token: "hozzaferes", refresh_token: "frissito", expires_in: 1800 }),
        { status: 200, headers: { "content-type": "application/json" } },
      );
    }

    if (url.startsWith("https://intezmenykereso.e-kreta.hu/")) {
      return new Response(
        '<a data-val="klik123456">Példa Általános Iskola (klik123456 - 034802)</a>',
        { status: 200, headers: { "content-type": "text/html" } },
      );
    }

    throw new Error(`unexpected request: ${url}`);
  };

  return { fetch: impl, passwordsSeen };
}

test("the setup window is reachable only with its token and its own loopback address", async (t) => {
  const window = await openSetupWindow({ store: freshStore(), fetchImpl: kretaMock().fetch });
  t.after(() => window.close());
  const base = new URL(window.url);

  const noToken = await fetch(`${base.origin}/`);
  assert.equal(noToken.status, 403);

  const wrongToken = await fetch(`${base.origin}/?t=talalgatas`);
  assert.equal(wrongToken.status, 403);

  // A hostname that merely resolves to 127.0.0.1 is refused: the page must
  // not be reachable through DNS rebinding from any site the parent visits.
  assert.equal(await rawGet(window.url, "kreta.example"), 403);
  assert.equal(await rawGet(window.url, `127.0.0.1:${base.port}`), 200);

  const ok = await fetch(window.url);
  assert.equal(ok.status, 200);
  assert.match(ok.headers.get("content-type") ?? "", /text\/html/);
  assert.match(await ok.text(), /Gyerek hozzáadása/);

  window.close();
  assert.equal(await window.finished, null);
});

test("a saved child is signed in first, then stored, and the window resolves with them", async (t) => {
  const store = freshStore();
  const kreta = kretaMock();
  const window = await openSetupWindow({ store, fetchImpl: kreta.fetch });
  t.after(() => window.close());
  const token = new URL(window.url).searchParams.get("t") ?? "";
  const base = new URL(window.url).origin;

  const response = await fetch(`${base}/save?t=${encodeURIComponent(token)}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      label: "Marci",
      username: "72123456789",
      password: PASSWORD,
      institute_code: "https://klik123456.e-kreta.hu",
      institute_name: "Példa Általános Iskola",
    }),
  });

  assert.equal(response.status, 200);
  assert.deepEqual(await response.json(), { label: "Marci" });
  assert.deepEqual(kreta.passwordsSeen, [PASSWORD], "the credential is proven before it is written");

  const saved = await window.finished;
  assert.equal(saved?.label, "Marci");
  // The URL form of the institute is normalized to the bare code.
  assert.equal(saved?.instituteCode, "klik123456");
  assert.equal(store.password(saved!.id), PASSWORD);
});

test("a wrong password is refused with KRÉTA's own wording and nothing is stored", async (t) => {
  const store = freshStore();
  const window = await openSetupWindow({ store, fetchImpl: kretaMock().fetch });
  t.after(() => window.close());
  const token = new URL(window.url).searchParams.get("t") ?? "";
  const base = new URL(window.url).origin;

  const response = await fetch(`${base}/save?t=${encodeURIComponent(token)}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      label: "Marci",
      username: "72123456789",
      password: "elgepelt",
      institute_code: "klik123456",
    }),
  });

  assert.equal(response.status, 400);
  assert.match(((await response.json()) as { error: string }).error, /Sikertelen bejelentkezés/);
  assert.deepEqual(store.list(), [], "a failed sign-in writes nothing");

  window.close();
});

test("a missing field is named rather than saved as an empty credential", async (t) => {
  const window = await openSetupWindow({ store: freshStore(), fetchImpl: kretaMock().fetch });
  t.after(() => window.close());
  const token = new URL(window.url).searchParams.get("t") ?? "";
  const base = new URL(window.url).origin;

  const response = await fetch(`${base}/save?t=${encodeURIComponent(token)}`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ label: "Marci", username: "72123456789", institute_code: "klik123456" }),
  });

  assert.equal(response.status, 400);
  assert.match(((await response.json()) as { error: string }).error, /KRÉTA jelszó/);
  window.close();
});

test("the school is searched by name so no institute code has to be found by hand", async (t) => {
  const window = await openSetupWindow({ store: freshStore(), fetchImpl: kretaMock().fetch });
  t.after(() => window.close());
  const token = new URL(window.url).searchParams.get("t") ?? "";
  const base = new URL(window.url).origin;

  const short = await fetch(`${base}/institutes?t=${encodeURIComponent(token)}&q=Pé`);
  assert.deepEqual(await short.json(), { suggestions: [] }, "no upstream call for a stub query");

  const found = await fetch(`${base}/institutes?t=${encodeURIComponent(token)}&q=Példa Általános`);
  assert.deepEqual(await found.json(), {
    suggestions: [{ code: "klik123456", name: "Példa Általános Iskola" }],
  });

  window.close();
});
