/**
 * The local setup page.
 *
 * This page exists so the KRÉTA password never travels through the model. A
 * conversation is a transcript: anything typed into it is stored and sent
 * onward. The password typed here goes from the parent's browser to a server
 * bound to 127.0.0.1 in this same process, and from there straight to
 * idp.e-kreta.hu.
 *
 * It also does the two things a static extension settings dialog cannot: it
 * looks the school up by name instead of asking for a code out of a URL, and
 * it signs in before saving, so a typo is caught here rather than at the
 * parent's first question.
 */
import { BRAND } from "@uzenofuzet/core/brand";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export interface PageOptions {
  token: string;
  /** Pre-filled when the parent is re-entering a password for a known child. */
  label?: string;
  keyStorage: string;
}

export function setupPage(options: PageOptions): string {
  const token = escapeHtml(options.token);
  const label = escapeHtml(options.label ?? "");
  const keyStorage = escapeHtml(options.keyStorage);

  return `<!doctype html>
<html lang="hu">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${BRAND.name} — gyerek hozzáadása</title>
<style>
  :root {
    color-scheme: light dark;
    --bg: #f6f5f2; --card: #fff; --ink: #1b1a17; --muted: #5f5b52;
    --line: #dcd7cc; --accent: #1f5c46; --accent-ink: #fff; --bad: #9c2b1d;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #16151300; --bg: #161513; --card: #201f1c; --ink: #f2efe9; --muted: #a7a196;
      --line: #35322c; --accent: #4c9c7c; --accent-ink: #10201a; --bad: #e6836f;
    }
  }
  * { box-sizing: border-box; }
  body {
    margin: 0; padding: 2rem 1rem 4rem; background: var(--bg); color: var(--ink);
    font: 15px/1.55 -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  }
  main { max-width: 34rem; margin: 0 auto; }
  h1 { font-size: 1.4rem; margin: 0 0 .35rem; }
  .lede { color: var(--muted); margin: 0 0 1.5rem; }
  form, .done {
    background: var(--card); border: 1px solid var(--line); border-radius: 12px;
    padding: 1.25rem;
  }
  label { display: block; font-weight: 600; margin: 0 0 .3rem; }
  .hint { color: var(--muted); font-weight: 400; font-size: .875rem; margin: 0 0 .4rem; }
  .field { margin-bottom: 1.1rem; position: relative; }
  input {
    width: 100%; padding: .6rem .7rem; font: inherit; color: inherit;
    background: var(--bg); border: 1px solid var(--line); border-radius: 8px;
  }
  input:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
  button {
    font: inherit; font-weight: 600; padding: .65rem 1.1rem; border-radius: 8px;
    border: 1px solid transparent; background: var(--accent); color: var(--accent-ink);
    cursor: pointer;
  }
  button[disabled] { opacity: .55; cursor: progress; }
  ul.results {
    list-style: none; margin: .25rem 0 0; padding: 0; position: absolute; z-index: 5;
    left: 0; right: 0; background: var(--card); border: 1px solid var(--line);
    border-radius: 8px; max-height: 15rem; overflow-y: auto;
  }
  ul.results:empty { display: none; }
  ul.results li { padding: .5rem .7rem; cursor: pointer; border-bottom: 1px solid var(--line); }
  ul.results li:last-child { border-bottom: 0; }
  ul.results li:hover, ul.results li[aria-selected="true"] { background: var(--bg); }
  ul.results code { color: var(--muted); font-size: .8rem; }
  .status { margin-top: 1rem; min-height: 1.4rem; }
  .status.bad { color: var(--bad); }
  .note { color: var(--muted); font-size: .875rem; margin-top: 1.5rem; }
  .done { text-align: center; }
</style>
</head>
<body>
<main>
  <h1>Gyerek hozzáadása</h1>
  <p class="lede">Ez az oldal a saját gépeden fut. Amit ide beírsz, nem kerül bele a Claude-dal
  folytatott beszélgetésbe.</p>

  <form id="form" autocomplete="off">
    <div class="field">
      <label for="label">A gyerek neve</label>
      <p class="hint">Ezen a néven fogsz rá hivatkozni a Claude-nak. Elég a keresztneve.</p>
      <input id="label" name="label" required value="${label}" autocomplete="off">
    </div>

    <div class="field">
      <label for="institute">Iskola</label>
      <p class="hint">Kezdd el írni az iskola nevét, és válassz a listából.</p>
      <input id="institute" name="institute" required autocomplete="off"
             role="combobox" aria-expanded="false" aria-controls="results">
      <ul class="results" id="results" role="listbox"></ul>
    </div>

    <div class="field">
      <label for="username">KRÉTA felhasználónév</label>
      <p class="hint">Amivel a gyerek KRÉTA-fiókjába belépsz — általában az oktatási azonosító.</p>
      <input id="username" name="username" required autocomplete="off">
    </div>

    <div class="field">
      <label for="password">KRÉTA jelszó</label>
      <p class="hint">Titkosítva tárolódik a gépeden; a titkosító kulcs ${keyStorage}.</p>
      <input id="password" name="password" type="password" required autocomplete="off">
    </div>

    <button type="submit" id="submit">Belépés és mentés</button>
    <p class="status" id="status" role="status" aria-live="polite"></p>
  </form>

  <p class="note">${escapeHtml(BRAND.disclaimer)}</p>
</main>

<script>
const token = ${JSON.stringify(options.token)};
const form = document.getElementById("form");
const institute = document.getElementById("institute");
const results = document.getElementById("results");
const status = document.getElementById("status");
const submit = document.getElementById("submit");
let chosen = null;
let searchTimer = 0;

function say(text, bad) {
  status.textContent = text;
  status.className = bad ? "status bad" : "status";
}

function clearResults() {
  results.replaceChildren();
  institute.setAttribute("aria-expanded", "false");
}

institute.addEventListener("input", () => {
  chosen = null;
  const query = institute.value.trim();
  clearTimeout(searchTimer);
  if (query.length < 3) return clearResults();
  searchTimer = setTimeout(async () => {
    let suggestions = [];
    try {
      const response = await fetch("/institutes?t=" + encodeURIComponent(token) +
        "&q=" + encodeURIComponent(query));
      if (!response.ok) throw new Error("search");
      suggestions = (await response.json()).suggestions ?? [];
    } catch {
      say("Az iskolakereső most nem érhető el. Írd be az iskola KRÉTA-kódját (a címben a https://KÓD.e-kreta.hu).", true);
      return clearResults();
    }
    results.replaceChildren(...suggestions.map((item) => {
      const li = document.createElement("li");
      li.setAttribute("role", "option");
      li.textContent = item.name + " ";
      const code = document.createElement("code");
      code.textContent = "(" + item.code + ")";
      li.append(code);
      li.addEventListener("click", () => {
        chosen = item;
        institute.value = item.name;
        clearResults();
        document.getElementById("username").focus();
      });
      return li;
    }));
    institute.setAttribute("aria-expanded", suggestions.length > 0 ? "true" : "false");
    if (suggestions.length === 0) say("Nincs találat erre a névre. Próbáld máshogy, vagy írd be a KRÉTA-kódot.", false);
    else say("", false);
  }, 250);
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  submit.disabled = true;
  say("Belépés a KRÉTA-ba…", false);
  const payload = {
    label: document.getElementById("label").value,
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
    // Without a pick from the list, whatever was typed is treated as a code.
    institute_code: chosen ? chosen.code : institute.value,
    institute_name: chosen ? chosen.name : undefined,
  };
  try {
    const response = await fetch("/save?t=" + encodeURIComponent(token), {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(payload),
    });
    const body = await response.json();
    if (!response.ok) throw new Error(body.error || "Ismeretlen hiba.");
    document.querySelector("main").innerHTML =
      '<h1>Kész</h1><div class="done"><p><strong>' + body.label +
      '</strong> hozzáadva.</p><p>Ezt az ablakot bezárhatod, és folytathatod a Claude-ban.</p></div>';
  } catch (error) {
    say(error.message, true);
    submit.disabled = false;
  }
});
</script>
</body>
</html>
`;
}
