import assert from "node:assert/strict";
import { test } from "node:test";
import { parseInstituteSelector, searchKretaInstitutes } from "../src/institutes/search.js";

const selectorHtml = `
  <li><a href="#" class="dropdown-item" data-val="klik034802001">Budenz J&#xF3;zsef &#xC1;ltal&#xE1;nos Iskola &#xE9;s Gimn&#xE1;zium (klik034802001 - 034802)</a></li>
  <li><a href="#" class="dropdown-item" data-val="BUDENZ-OKTATAS">Budenz J&#xF3;zsef Gimn&#xE1;zium Alap&#xED;tv&#xE1;ny (BUDENZ-OKTATAS)</a></li>
`;

test("the eKRÉTA selector HTML becomes bounded name/code suggestions", () => {
  assert.deepEqual(parseInstituteSelector(selectorHtml), [
    { code: "klik034802001", name: "Budenz József Általános Iskola és Gimnázium" },
    { code: "BUDENZ-OKTATAS", name: "Budenz József Gimnázium Alapítvány" },
  ]);
});

test("the upstream request stays on the fixed live-institute endpoint", async () => {
  let requestedUrl = "";
  const suggestions = await searchKretaInstitutes("  Budenz József  ", async (input) => {
    requestedUrl = String(input);
    return new Response(selectorHtml, { status: 200, headers: { "content-type": "text/html; charset=utf-8" } });
  });
  assert.equal(
    requestedUrl,
    "https://intezmenykereso.e-kreta.hu/instituteSelector/Budenz%20J%C3%B3zsef?showOnlyLive=true",
  );
  assert.equal(suggestions[0]?.code, "klik034802001");
});
