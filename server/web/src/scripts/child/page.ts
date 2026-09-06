/** A gyerek saját oldala: fent a név és az iskola, alatta a két csatlakozó
 *  saját fülön, legalul a veszélyzóna. Ugyanez az oldal fogadja az új gyereket:
 *  a névvel már létrejön, a kapcsolatok utána következnek. */
import { onAuthStateChanged, signInWithPopup, type User } from "firebase/auth";
import {
  connectKreta,
  deleteProfile,
  disconnectClassroom,
  establishSession,
  fetchProfiles,
  saveProfile,
  startClassroomAuthorization,
  stopKretaConnection,
} from "../dashboard/api";
import { auth, provider } from "../dashboard/firebase";
import { createInstituteSearch } from "../dashboard/institutes";
import {
  classroomDetail,
  isClassroomConnected,
  isOnline,
  kretaDetail,
  type Profile,
} from "../dashboard/profiles";
import { choiceFor, describeChoice, isChoice, keepAlivePayload, type KeepAliveChoice } from "./keepAlive";

type Connector = "kreta" | "classroom";

export function startChildPage(): void {
  const loading = document.querySelector<HTMLElement>("#child-loading")!;
  const body = document.querySelector<HTMLElement>("#child-body")!;
  const title = document.querySelector<HTMLElement>("#child-title")!;
  const back = document.querySelector<HTMLAnchorElement>("#child-back")!;
  const status = document.querySelector<HTMLElement>("#child-status")!;
  const details = document.querySelector<HTMLElement>("#child-details")!;
  const kretaState = document.querySelector<HTMLElement>("#tab-kreta-state")!;
  const kretaDetailText = document.querySelector<HTMLElement>("#child-kreta-detail")!;
  const classroomState = document.querySelector<HTMLElement>("#tab-classroom-state")!;
  const classroomAccount = document.querySelector<HTMLElement>("#child-classroom-account")!;
  const classroomFacts = document.querySelector<HTMLElement>("#child-classroom-facts")!;
  const classroomDetailText = document.querySelector<HTMLElement>("#child-classroom-detail")!;
  const classroomHint = document.querySelector<HTMLElement>("#child-classroom-hint")!;
  const classroomBlocked = document.querySelector<HTMLElement>("#child-classroom-blocked")!;
  const blockedStatus = document.querySelector<HTMLElement>("#child-classroom-blocked-status")!;
  const copyLetter = document.querySelector<HTMLButtonElement>("#copy-school-letter")!;
  const sessionIssue = document.querySelector<HTMLElement>("#child-session-issue")!;
  const sessionFix = document.querySelector<HTMLButtonElement>("#child-session-fix")!;
  const tabs = [...document.querySelectorAll<HTMLButtonElement>(".tabs .tab")];
  const classroomConnect = document.querySelector<HTMLButtonElement>("#child-classroom-connect")!;
  const dangerKreta = document.querySelector<HTMLElement>("#danger-kreta")!;
  const dangerClassroom = document.querySelector<HTMLElement>("#danger-classroom")!;
  const dangerDelete = document.querySelector<HTMLElement>("#danger-delete")!;
  const adminHelp = document.querySelector<HTMLDetailsElement>("#classroom-admin-help")!;

  const profileSection = document.querySelector<HTMLElement>("#child-profile")!;
  const form = document.querySelector<HTMLFormElement>("#profile-form")!;
  const nameInput = document.querySelector<HTMLInputElement>("#child-name")!;
  const instituteInput = document.querySelector<HTMLInputElement>("#institute-code")!;
  const saveButton = document.querySelector<HTMLButtonElement>("#save-profile")!;
  const cancelButton = document.querySelector<HTMLButtonElement>("#cancel-profile")!;

  const kretaForm = document.querySelector<HTMLFormElement>("#kreta-form")!;
  const usernameInput = document.querySelector<HTMLInputElement>("#kreta-username")!;
  const passwordInput = document.querySelector<HTMLInputElement>("#kreta-password")!;
  const keepAliveNote = document.querySelector<HTMLElement>("#keep-alive-note")!;
  const kretaConnect = document.querySelector<HTMLButtonElement>("#child-kreta-connect")!;

  const params = new URLSearchParams(location.search);
  const candidateReturn = params.get("return_to") ?? "";
  const returnTo = candidateReturn.startsWith("/authorize?") && candidateReturn.length <= 12_000
    ? candidateReturn
    : "";
  const classroomResult = params.get("classroom") ?? "";
  const backHref = returnTo ? `/?${new URLSearchParams({ return_to: returnTo }).toString()}` : "/";
  back.href = backHref;

  const instituteSearch = createInstituteSearch(() => auth.currentUser);
  let profileId = params.get("id") ?? "";
  let profile: Profile | null = null;
  let selected: Connector = "kreta";

  function school(): string {
    return instituteInput.value.trim();
  }

  function connectorOf(tab: HTMLButtonElement): Connector {
    return tab.id === "tab-classroom" ? "classroom" : "kreta";
  }

  /** A két csatlakozó külön fül; a KRÉTA iskola nélkül zárt, és ezt ki is írja. */
  function renderTabs() {
    const kretaLocked = !school();
    if (kretaLocked && selected === "kreta") selected = "classroom";

    for (const tab of tabs) {
      const connector = connectorOf(tab);
      const active = connector === selected;
      tab.disabled = connector === "kreta" && kretaLocked;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
      document.querySelector<HTMLElement>(`#${tab.getAttribute("aria-controls")}`)!.hidden = !active;
    }

    if (!profile) return;
    const online = isOnline(profile);
    const classroomConnected = isClassroomConnected(profile);
    kretaState.textContent = kretaLocked ? "iskola kell" : online ? "Online" : "Offline";
    kretaState.classList.toggle("online", online);
    classroomState.textContent = classroomConnected ? "Kapcsolva" : "Nincs kapcsolva";
    classroomState.classList.toggle("online", classroomConnected);
  }

  function selectTab(connector: Connector) {
    selected = connector;
    renderTabs();
  }

  for (const [index, tab] of tabs.entries()) {
    tab.addEventListener("click", () => selectTab(connectorOf(tab)));
    tab.addEventListener("keydown", (event) => {
      const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (!step) return;
      event.preventDefault();
      const next = tabs[(index + step + tabs.length) % tabs.length]!;
      if (next.disabled) return;
      selectTab(connectorOf(next));
      next.focus();
    });
  }

  /** Az iskola tiltását megjegyezzük: enélkül a gomb úgy néz ki, mintha működne. */
  function blockedKey(): string {
    return `uzenofuzet-classroom-blocked:${profileId}`;
  }

  function readBlocked(): boolean {
    try {
      return localStorage.getItem(blockedKey()) === "1";
    } catch {
      return false;
    }
  }

  function writeBlocked(blocked: boolean) {
    try {
      if (blocked) localStorage.setItem(blockedKey(), "1");
      else localStorage.removeItem(blockedKey());
    } catch {
      // A blokkolás emléke kényelmi funkció; privát módban elmarad.
    }
  }

  function schoolLetter(): string {
    return [
      "Kedves Rendszergazda!",
      "",
      "A gyerekem iskolai Google-fiókjával szeretném engedélyezni az Üzenőfüzet nevű alkalmazást.",
      "Az alkalmazás kizárólag olvassa a Classroom-adatokat (kurzusok, feladatok, a gyerek saját",
      "beadásai és jegyei, közlemények, tananyagok); nem ad be feladatot és nem módosít semmit.",
      "",
      "A jóváhagyáshoz szükséges kliensazonosító, a kért hozzáférések, az Admin konzolos lépések",
      "és a visszavonás módja itt olvasható:",
      new URL("/iskolai-admin", location.href).href,
      "",
      "Köszönettel:",
    ].join("\n");
  }

  copyLetter.addEventListener("click", async () => {
    copyLetter.disabled = true;
    try {
      await navigator.clipboard.writeText(schoolLetter());
      blockedStatus.textContent = "A levélszöveget a vágólapra másoltuk.";
    } catch {
      blockedStatus.textContent = "A másolás nem sikerült. Küldd el az iskolának ezt a címet: uzenofuzet.hu/iskolai-admin";
    } finally {
      copyLetter.disabled = false;
    }
  });

  let sessionReady = false;

  /** A Classroom visszatérő lépése süti-alapú: enélkül a folyamat a végén bukna el. */
  async function ensureSession(user: User): Promise<boolean> {
    try {
      await establishSession(user);
      sessionReady = true;
    } catch {
      sessionReady = false;
    }
    sessionIssue.hidden = sessionReady;
    return sessionReady;
  }

  sessionFix.addEventListener("click", async () => {
    sessionFix.disabled = true;
    try {
      await signInWithPopup(auth, provider);
      const user = auth.currentUser;
      if (user && await ensureSession(user)) setStatus("A Google-belépés megújítva. Indulhat a Classroom összekapcsolása.", "success");
      else setStatus("A Google-belépést nem sikerült megújítani. Próbáld újra, vagy lépj be újra a főoldalon.", "error");
    } catch {
      setStatus("A Google-belépés ablakát bezártad; nem változtattunk semmin.", "");
    } finally {
      sessionFix.disabled = false;
    }
  });

  function setStatus(message: string, kind = "") {
    status.textContent = message;
    status.dataset.kind = kind;
  }

  function keepAliveChoice(): KeepAliveChoice {
    const checked = kretaForm.querySelector<HTMLInputElement>("input[name=keepAliveWindow]:checked");
    return checked && isChoice(checked.value) ? checked.value : "trial";
  }

  function selectKeepAlive(choice: KeepAliveChoice) {
    for (const input of kretaForm.querySelectorAll<HTMLInputElement>("input[name=keepAliveWindow]")) {
      input.checked = input.value === choice;
    }
    keepAliveNote.textContent = describeChoice(choice);
  }

  kretaForm.addEventListener("change", (event) => {
    if ((event.target as HTMLInputElement).name === "keepAliveWindow") {
      keepAliveNote.textContent = describeChoice(keepAliveChoice());
    }
  });

  // Az iskola beírása azonnal kinyitja a KRÉTA-fület: a szülő lássa, mit oldott fel.
  instituteInput.addEventListener("input", renderTabs);

  /** A törzs csak akkor jelenik meg, ha már a helyes cím és tartalom van benne. */
  function reveal() {
    loading.hidden = true;
    body.hidden = false;
  }

  /** A mezők a mentett állapotot tükrözik; a jelszó soha nem marad a lapon. */
  function fillForm() {
    instituteSearch.reset();
    nameInput.value = profile?.childName ?? "";
    instituteInput.value = profile?.instituteCode ?? "";
    usernameInput.value = profile?.kretaUsername ?? "";
    passwordInput.value = "";
    selectKeepAlive(choiceFor(profile ?? undefined));
  }

  function renderProfile() {
    const online = Boolean(profile && isOnline(profile));
    const classroomConnected = Boolean(profile && isClassroomConnected(profile));

    title.textContent = profile ? profile.childName : "Gyerek hozzáadása";
    document.title = profile ? `${profile.childName} – Üzenőfüzet` : "Gyerek hozzáadása – Üzenőfüzet";
    saveButton.textContent = profile ? "Adatok mentése" : "Gyerek mentése";
    cancelButton.textContent = profile ? "Változtatások elvetése" : "Mégse";

    profileSection.hidden = false;
    // Amíg nincs mit kapcsolni, a fülek meg sem jelennek: nincs kiírt tiltás.
    details.hidden = !profile;

    kretaDetailText.textContent = profile ? kretaDetail(profile) : "";
    kretaConnect.textContent = online ? "Újrakapcsolás" : "Kapcsolódás";
    dangerKreta.hidden = !online;

    classroomAccount.textContent = profile?.classroom.email ?? "";
    classroomFacts.hidden = !profile?.classroom.email;
    classroomDetailText.textContent = profile ? classroomDetail(profile) : "";
    classroomConnect.hidden = classroomConnected;
    const blocked = Boolean(profile) && !classroomConnected && readBlocked();
    classroomBlocked.hidden = !blocked;
    classroomHint.hidden = classroomConnected || blocked;
    classroomConnect.textContent = blocked
      ? "Újra megpróbálom"
      : profile?.classroom.status === "expired"
        ? "Classroom újrakapcsolása"
        : "Classroom összekapcsolása";
    dangerClassroom.hidden = !classroomConnected;

    for (const target of document.querySelectorAll<HTMLElement>("[data-child-name]")) {
      target.textContent = profile?.childName ?? "";
    }
    renderTabs();
    reveal();
  }

  /** A mentés válasza a lap új igazsága; új gyereknél a cím is megkapja az azonosítót. */
  function adoptProfile(saved: Profile) {
    profile = saved;
    if (profileId !== saved.id) {
      profileId = saved.id;
      const url = new URL(location.href);
      url.searchParams.set("id", saved.id);
      history.replaceState(null, "", `${url.pathname}${url.search}`);
    }
    fillForm();
    renderProfile();
  }

  async function load(user: User) {
    const profiles = await fetchProfiles(user);
    profile = profiles.find((candidate) => candidate.id === profileId) ?? null;
    if (!profile) {
      details.hidden = true;
      profileSection.hidden = true;
      title.textContent = "Ismeretlen gyerek";
      reveal();
      setStatus("Ez a gyerekprofil már nem található. Térj vissza a listához.", "error");
      return;
    }
    fillForm();
    renderProfile();
  }

  function collapseConfirms() {
    for (const item of [dangerKreta, dangerClassroom, dangerDelete]) {
      item.querySelector<HTMLElement>("[data-danger-confirm-box]")!.hidden = true;
      item.querySelector<HTMLButtonElement>("[data-danger-open]")!.hidden = false;
    }
  }

  /** A veszélyes műveletek külön, kétlépcsős megerősítéssel futnak. */
  function bindDanger(
    item: HTMLElement,
    run: (current: Profile, user: User) => Promise<string>,
    leaves = false,
  ) {
    const openButton = item.querySelector<HTMLButtonElement>("[data-danger-open]")!;
    const confirmBox = item.querySelector<HTMLElement>("[data-danger-confirm-box]")!;
    const confirmButton = item.querySelector<HTMLButtonElement>("[data-danger-confirm]")!;
    const cancelDanger = item.querySelector<HTMLButtonElement>("[data-danger-cancel]")!;

    openButton.addEventListener("click", () => {
      collapseConfirms();
      openButton.hidden = true;
      confirmBox.hidden = false;
      confirmButton.focus();
    });

    cancelDanger.addEventListener("click", () => {
      confirmBox.hidden = true;
      openButton.hidden = false;
      openButton.focus();
    });

    confirmButton.addEventListener("click", async () => {
      const current = profile;
      const user = auth.currentUser;
      if (!current || !user) return;
      confirmButton.disabled = true;
      setStatus("Művelet folyamatban…");
      try {
        const message = await run(current, user);
        if (leaves) {
          sessionStorage.setItem("uzenofuzet-status", message);
          location.assign(backHref);
          return;
        }
        collapseConfirms();
        await load(user);
        setStatus(message, "success");
        status.focus();
      } catch (error) {
        setStatus(error instanceof Error ? error.message : "A művelet nem sikerült.", "error");
      } finally {
        confirmButton.disabled = false;
      }
    });
  }

  bindDanger(dangerKreta, async (current, user) => {
    await stopKretaConnection(user, current.id);
    return `${current.childName} KRÉTA-kapcsolata Offline. A gyerekprofil megmaradt.`;
  });

  bindDanger(dangerClassroom, async (current, user) => {
    await disconnectClassroom(user, current.id);
    return `${current.childName} Classroom-fiókját leválasztottuk. A gyerekprofil megmaradt.`;
  });

  bindDanger(dangerDelete, async (current, user) => {
    await deleteProfile(user, current.id);
    return `${current.childName} profilját a KRÉTA- és Classroom-kapcsolatával együtt töröltük.`;
  }, true);

  classroomConnect.addEventListener("click", async () => {
    const current = profile;
    const user = auth.currentUser;
    if (!current || !user) return;
    classroomConnect.disabled = true;
    setStatus("Az iskolai Google-belépés megnyitása…");
    if (!sessionReady && !await ensureSession(user)) {
      setStatus("A Google-munkamenet lejárt. Újítsd meg a belépést, aztán indulhat a Classroom.", "error");
      classroomConnect.disabled = false;
      sessionFix.focus();
      return;
    }
    try {
      location.assign(await startClassroomAuthorization(user, current.id, returnTo));
    } catch (error) {
      setStatus(
        error instanceof Error ? error.message : "A Classroom összekapcsolását nem sikerült elindítani.",
        "error",
      );
      classroomConnect.disabled = false;
    }
  });

  cancelButton.addEventListener("click", () => {
    if (!profile) {
      location.assign(backHref);
      return;
    }
    fillForm();
    renderProfile();
    setStatus("A változtatásokat elvetettük.");
    nameInput.focus();
  });

  // A név és az iskola mentése önmagában is teljes művelet: a gyerek ettől létezik.
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const user = auth.currentUser;
    if (!user) return;
    const created = !profile;
    const wasOnline = Boolean(profile && isOnline(profile));
    saveButton.disabled = true;
    setStatus("Mentés…");
    try {
      const saved = await saveProfile(user, {
        ...(profileId ? { id: profileId } : {}),
        childName: nameInput.value,
        instituteCode: school(),
      });
      adoptProfile(saved);
      // Az iskola cseréje eldobja a régi naplóhoz szóló belépést; ezt ki kell mondani.
      const droppedConnection = wasOnline && !isOnline(saved);
      setStatus(
        created
          ? `${saved.childName} profilját elmentettük. Most kapcsolhatod a KRÉTA-naplót vagy a Classroomot.`
          : droppedConnection
            ? "A gyerek adatait elmentettük. Az iskola megváltozott, ezért a KRÉTA-kapcsolat megszűnt: a jelszóval kapcsolhatod vissza."
            : "A gyerek adatait elmentettük.",
        "success",
      );
      status.focus();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "A profilt nem sikerült elmenteni.", "error");
    } finally {
      saveButton.disabled = false;
    }
  });

  // A KRÉTA-fül egyetlen művelete: belépés a naplóba a most beírt jelszóval.
  kretaForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const user = auth.currentUser;
    if (!profile || !user) return;
    if (!form.reportValidity() || !kretaForm.reportValidity()) return;
    kretaConnect.disabled = true;
    setStatus("Kapcsolódás a KRÉTA-naplóhoz…");
    try {
      const saved = await connectKreta(user, {
        id: profile.id,
        childName: nameInput.value,
        instituteCode: school(),
        kretaUsername: usernameInput.value,
        password: passwordInput.value,
        ...keepAlivePayload(keepAliveChoice()),
      });
      passwordInput.value = "";
      adoptProfile(saved);
      setStatus(`${saved.childName} KRÉTA-kapcsolata Online.`, "success");
      status.focus();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "A KRÉTA-kapcsolatot nem sikerült létrehozni.", "error");
    } finally {
      kretaConnect.disabled = false;
    }
  });

  function showClassroomResult() {
    if (!classroomResult) return;
    const outcomes: Record<string, { message: string; kind: string }> = {
      connected: { message: "A gyerek Google Classroom-fiókját összekapcsoltuk.", kind: "success" },
      cancelled: { message: "A Classroom engedélyezését megszakítottad; nem változtattunk semmin.", kind: "" },
      blocked: {
        message: "Az iskola még nem engedélyezte az Üzenőfüzetet. A Classroom fülön látod, mit tehetsz.",
        kind: "error",
      },
      profile_missing: { message: "A gyerekprofil közben megszűnt. Indítsd újra az összekapcsolást.", kind: "error" },
      invalid_state: { message: "A Classroom engedélyezési kérés lejárt vagy már felhasználták. Indítsd újra.", kind: "error" },
      failed: {
        message: "A Classroom összekapcsolása nem sikerült. Ellenőrizd, hogy a gyerek iskolai Google-fiókját választottad-e.",
        kind: "error",
      },
    };
    const outcome = outcomes[classroomResult] ?? outcomes.failed!;
    setStatus(outcome.message, outcome.kind);
    if (classroomResult === "blocked" || classroomResult === "connected") {
      writeBlocked(classroomResult === "blocked");
    }
    if (profile) {
      selectTab("classroom");
      renderProfile();
    }
    if (classroomResult === "blocked") adminHelp.hidden = false;
    const clean = new URL(location.href);
    clean.searchParams.delete("classroom");
    history.replaceState(null, "", `${clean.pathname}${clean.search}`);
    status.focus();
  }

  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      location.replace(backHref);
      return;
    }
    await ensureSession(user);
    try {
      if (profileId) {
        await load(user);
      } else {
        fillForm();
        renderProfile();
        nameInput.focus();
      }
      showClassroomResult();
    } catch (error) {
      reveal();
      setStatus(error instanceof Error ? error.message : "A gyerek adatait nem sikerült betölteni.", "error");
    }
  });
}
