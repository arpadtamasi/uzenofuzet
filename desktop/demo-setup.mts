/** Opens the setup window against a fake KRÉTA, for a look at the page. */
import { randomBytes } from "node:crypto";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { openSetupWindow } from "./src/setup/server.js";
import { ChildStore } from "./src/store.js";

const impl: typeof fetch = async (input) => {
  const url = String(input);
  if (url.startsWith("https://intezmenykereso.e-kreta.hu/")) {
    return new Response(
      `<a data-val="klik034802001">Budenz József Általános Iskola és Gimnázium (klik034802001 - 034802)</a>
       <a data-val="klik035201002">Budapesti Fazekas Mihály Gyakorló Általános Iskola (klik035201002 - 035201)</a>
       <a data-val="BUDENZ-OKTATAS">Budenz József Gimnázium Alapítvány (BUDENZ-OKTATAS)</a>`,
      { status: 200, headers: { "content-type": "text/html" } });
  }
  throw new Error("unexpected " + url);
};

const store = ChildStore.withKey(join(mkdtempSync(join(tmpdir(), "demo-")), "c.json"), randomBytes(32));
const w = await openSetupWindow({ store, fetchImpl: impl, timeoutMs: 600_000 });
console.log(w.url);
