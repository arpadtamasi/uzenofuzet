/** A hosztolt szolgáltatás elérhetősége — nem a profilok Claude-készültsége.
 *
 *  Három állapot, mert háromfélét tudhatunk: a szolgáltatás válaszolt és jól
 *  van; válaszolt, de hibát jelent; vagy el sem értük. Az utolsót nem hívjuk
 *  leállásnak — rossz wifi, böngészőbővítmény és helyi fejlesztői szerver is
 *  idetartozik —, a piros leállásfelirat pedig többet állítana, mint amit
 *  tudunk, és pont a szülőt ijeszti el. */
export function startServiceStatus(): void {
  const indicator = document.querySelector<HTMLElement>("#service-status");
  const label = document.querySelector<HTMLElement>("#service-status-label");
  if (!indicator || !label) return;

  function show(state: "online" | "degraded" | "unknown", message: string) {
    indicator!.classList.remove("online", "degraded");
    if (state !== "unknown") indicator!.classList.add(state);
    label!.textContent = message;
  }

  fetch("/health", { cache: "no-store" })
    .then((response) => {
      // Csak az számít leállásnak, amit maga a szolgáltatás mond magáról.
      if (response.ok) show("online", "A szolgáltatás működik");
      else if (response.status >= 500) show("degraded", "A szolgáltatás most akadozik");
      else show("unknown", "Az állapot most ismeretlen");
    })
    .catch(() => show("unknown", "Az állapot most ismeretlen"));
}
