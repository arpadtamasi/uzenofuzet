import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";

const read = (path: string) => readFileSync(new URL(path, import.meta.url), "utf8");

const page = read("../web/src/pages/gyerek.astro");
const details = read("../web/src/components/child/ChildDetails.astro");
const form = read("../web/src/components/child/ProfileForm.astro");
const kretaForm = read("../web/src/components/child/KretaForm.astro");
const pageModule = read("../web/src/scripts/child/page.ts");
const keepAlive = read("../web/src/scripts/child/keepAlive.ts");
const classroomRouter = read("../src/classroom/router.ts");
const profileRouter = read("../src/profiles/router.ts");

test("the child has a page of its own instead of a scrolling modal", () => {
  assert.match(page, /<ProfileForm \/>/);
  assert.match(page, /<ChildDetails \/>/);
  assert.ok(
    page.indexOf("<ProfileForm />") < page.indexOf("<ChildDetails />"),
    "the child's identity stands above its connectors",
  );
  assert.match(details, /<KretaForm \/>/, "the KRÉTA login lives inside the KRÉTA tab");
  assert.match(page, /<ClassroomAdminHelp \/>/);
  assert.match(page, /id="child-back"/);
  for (const source of [page, details, form, kretaForm]) {
    assert.doesNotMatch(source, /<dialog/);
    assert.doesNotMatch(source, /showModal/);
  }
});

test("a child exists from its name; the school is optional and the password is not asked here", () => {
  assert.match(form, /id="child-name"[^>]*required/);
  assert.match(form, /id="institute-code"/);
  assert.doesNotMatch(
    form.slice(form.indexOf('id="institute-code"'), form.indexOf("</label>", form.indexOf('id="institute-code"'))),
    /required/,
    "the school is optional: a Classroom-only child needs none",
  );
  assert.doesNotMatch(form, /type="password"/);
  assert.match(form, /nem kötelező/);
  assert.match(pageModule, /await saveProfile\(user, \{/);
  assert.match(pageModule, /childName: nameInput\.value,\n        instituteCode: school\(\),/);
  assert.doesNotMatch(
    pageModule.slice(pageModule.indexOf("await saveProfile"), pageModule.indexOf("adoptProfile(saved)")),
    /password/,
    "saving the child's data never carries a password",
  );
});

test("the server accepts a child without KRÉTA credentials and connects only on a password", () => {
  assert.match(profileRouter, /kretaUsername: z\.string\(\)\.trim\(\)\.max\(120[^)]*\)\.default\(""\)/);
  assert.match(profileRouter, /instituteCode: z\.string\(\)\.trim\(\)\.max\(200[^)]*\)\.default\(""\)/);
  assert.match(profileRouter, /password: z\.string\(\)\.max\(512[^)]*\)\.default\(""\)/);
  assert.match(profileRouter, /const wantsConnection = parsed\.data\.password\.length > 0;/);
  assert.match(profileRouter, /if \(wantsConnection && !parsed\.data\.instituteCode\)/);
  assert.match(profileRouter, /const identityChanged =/, "a login from another journal must not survive an edit");
});

test("the KRÉTA tab asks for the login, and only for the login", () => {
  assert.match(kretaForm, /id="kreta-username"/);
  assert.match(kretaForm, /id="kreta-password"/);
  assert.match(kretaForm, /id="child-kreta-connect"[^>]*type="submit"/);
  assert.ok(
    details.indexOf("<KretaForm />") > details.indexOf('id="panel-kreta"') &&
      details.indexOf("<KretaForm />") < details.indexOf('id="panel-classroom"'),
    "the KRÉTA login belongs to the KRÉTA connector",
  );
  assert.match(pageModule, /await connectKreta\(user, \{/);
  assert.match(pageModule, /passwordInput\.value = "";/, "the password never stays on the page");
  assert.match(pageModule, /kretaDetail\(profile\)/);
  assert.match(pageModule, /classroomDetail\(profile\)/);
});

test("the connectors appear only once there is a child, and the KRÉTA tab needs a school", () => {
  assert.match(
    pageModule,
    /details\.hidden = !profile;/,
    "no written-out lock: before the first save the tabs are simply not there",
  );
  assert.doesNotMatch(details, /tabs-lock/);
  assert.match(details, /\.tab:disabled/);
  assert.match(pageModule, /const kretaLocked = !school\(\);/);
  assert.match(pageModule, /tab\.disabled = connector === "kreta" && kretaLocked;/);
  assert.match(
    pageModule,
    /instituteInput\.addEventListener\("input", renderTabs\)/,
    "typing the school opens the KRÉTA tab straight away",
  );
  assert.match(pageModule, /kretaState\.textContent = kretaLocked \? "iskola kell"/);
});

test("the saved child takes over the address bar so the Classroom round trip finds it", () => {
  assert.match(pageModule, /function adoptProfile\(saved: Profile\)/);
  assert.match(pageModule, /url\.searchParams\.set\("id", saved\.id\)/);
  assert.match(pageModule, /history\.replaceState\(null, "", `\$\{url\.pathname\}\$\{url\.search\}`\)/);
});

test("stopping a connection stays a separate danger-zone action with its own confirmation", () => {
  assert.match(details, /Veszélyzóna/);
  for (const id of ["danger-kreta", "danger-classroom", "danger-delete"]) {
    const start = details.indexOf(`id="${id}"`);
    assert.notEqual(start, -1, `missing danger item: ${id}`);
    const item = details.slice(start, details.indexOf("</div>\n      </div>", start));
    assert.match(item, /data-danger-open/);
    assert.match(item, /data-danger-confirm-box/);
    assert.match(item, /data-danger-confirm/);
    assert.match(item, /data-danger-cancel/);
  }
  assert.match(pageModule, /stopKretaConnection\(user, current\.id\)/);
  assert.match(pageModule, /disconnectClassroom\(user, current\.id\)/);
  assert.match(pageModule, /A gyerekprofil megmaradt/);
});

test("profile deletion spells out that both connections go with it", () => {
  const start = details.indexOf('id="danger-delete"');
  const item = details.slice(start, details.indexOf("</section>", start));
  assert.match(item, /a KRÉTA- és a Classroom-kapcsolat is törlődik/);
  assert.match(item, /A KRÉTA- és a Classroom-kapcsolata is megszűnik/);
  assert.match(pageModule, /deleteProfile\(user, current\.id\)/);
  assert.match(pageModule, /Classroom-kapcsolatával együtt töröltük/);
  assert.match(pageModule, /details\.hidden = !profile/, "there is nothing to delete before the first save");
});

test("keep-alive is a short list of periods instead of a date field", () => {
  assert.doesNotMatch(kretaForm, /type="date"/);
  for (const value of ["trial", "7", "14", "30", "none"]) {
    assert.match(kretaForm, new RegExp(`name="keepAliveWindow" value="${value}"`));
  }
  assert.match(kretaForm, /30 perces próba/);
  assert.match(kretaForm, /1 hét/);
  assert.match(kretaForm, /2 hét/);
  assert.match(kretaForm, /1 hónap/);
  assert.match(kretaForm, /Határidő nélkül/);
  assert.match(keepAlive, /end\.setDate\(end\.getDate\(\) \+ Number\(choice\)\)/);
  assert.match(keepAlive, /keepAlive: choice !== "trial"/);
  assert.match(pageModule, /keepAlivePayload\(keepAliveChoice\(\)\)/);
});

test("the connection form still says what happens to the password and the token", () => {
  assert.match(kretaForm, /name="password" type="password"[^>]+autocomplete="current-password"/);
  assert.match(kretaForm, /A jelszó átmegy a szerveren, de nem mentjük el/);
  assert.match(kretaForm, /25 percenként megújítjuk/);
  assert.match(kretaForm, /A jelszót nem tároljuk/);
});

test("the page keeps the Claude return flow and hands its result back to the list", () => {
  assert.match(pageModule, /candidateReturn\.startsWith\("\/authorize\?"\)/);
  assert.match(pageModule, /const backHref = returnTo \? `\/\?\$\{new URLSearchParams\(\{ return_to: returnTo \}\)\.toString\(\)\}` : "\/"/);
  assert.match(pageModule, /sessionStorage\.setItem\("uzenofuzet-status"/);
  assert.match(pageModule, /location\.replace\(backHref\)/, "signed-out visitors go back to the sign-in");
});

test("the Classroom authorisation returns to the child that started it", () => {
  assert.match(classroomRouter, /const target = profileId \? new URL\("\/gyerek", issuer\) : new URL\("\/", issuer\)/);
  assert.match(classroomRouter, /target\.searchParams\.set\("id", profileId\)/);
  assert.match(pageModule, /startClassroomAuthorization\(user, current\.id, returnTo\)/);
});

test("the two connectors are equal tabs, not a profile with an external extra", () => {
  assert.match(details, /role="tablist"/);
  for (const id of ["tab-kreta", "tab-classroom", "panel-kreta", "panel-classroom"]) {
    assert.ok(details.includes(`id="${id}"`), `missing tab element: ${id}`);
  }
  assert.match(pageModule, /function selectTab\(connector: Connector\)/);
  assert.match(pageModule, /selectTab\("classroom"\)/, "returning from Google opens the Classroom tab");
});

test("a school block stays visible at the button instead of a status line that scrolls away", () => {
  assert.match(details, /id="child-classroom-hint"/, "the Request Access tip is there before any block");
  assert.match(details, /id="child-classroom-blocked"/);
  assert.match(details, /Request Access/);
  assert.match(details, /href="\/iskolai-admin"/);
  assert.match(pageModule, /uzenofuzet-classroom-blocked:/, "the block is remembered per child");
  assert.match(pageModule, /writeBlocked\(classroomResult === "blocked"\)/);
  assert.match(pageModule, /classroomConnect\.textContent = blocked/);
  assert.match(pageModule, /navigator\.clipboard\.writeText\(schoolLetter\(\)\)/);
});

test("the page reveals itself only once the right title is in place", () => {
  assert.match(page, /<h1 id="child-title"><\/h1>/, "no 'add a child' heading flashes while loading");
  assert.match(pageModule, /function reveal\(\)/);
  assert.match(pageModule, /: "Gyerek hozzáadása";/);
  assert.doesNotMatch(pageModule, /loading\.hidden = true;\n    body\.hidden = false;\n    try/);
});

test("a lapsed Google session is raised where it blocks, with a way out", () => {
  assert.match(details, /id="child-session-issue"/);
  assert.match(details, /id="child-session-fix"[^>]*>Belépés megújítása</);
  assert.ok(
    details.indexOf('id="child-session-issue"') > details.indexOf('id="panel-classroom"'),
    "only the Classroom round trip needs the session cookie",
  );
  assert.match(pageModule, /async function ensureSession\(user: User\): Promise<boolean>/);
  assert.match(pageModule, /if \(!sessionReady && !await ensureSession\(user\)\)/, "retry before leaving for Google");
  assert.match(pageModule, /signInWithPopup\(auth, provider\)/);
  assert.doesNotMatch(
    pageModule,
    /A Google-munkamenetet nem sikerült megújítani/,
    "no dead error line at the bottom of the page on load",
  );
});
