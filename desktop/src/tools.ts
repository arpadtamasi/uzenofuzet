/**
 * The setup tools — the part a static extension settings dialog cannot do.
 *
 * A manifest's `user_config` is a flat, fixed list of fields: three children
 * means twelve boxes, and a fourth child means a new release. So the manifest
 * asks for nothing at all, and children are added from the conversation
 * instead: the parent says "add Marci", and this opens the local setup page
 * where the school is searched by name and the password is typed outside the
 * transcript.
 */
import { execFile } from "node:child_process";
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { ToolError } from "@uzenofuzet/core/mcp";
import type { DesktopBackend } from "./backend.js";
import { openSetupWindow } from "./setup/server.js";
import { StoreError, type ChildStore } from "./store.js";

/** How long the tool call itself waits before answering "still open". */
const WAIT_MS = 120_000;

/** Best-effort: the parent can always click the link if this does nothing. */
function openInBrowser(url: string): void {
  const [command, args] =
    process.platform === "darwin"
      ? ["open", [url]]
      : process.platform === "win32"
        ? ["cmd", ["/c", "start", "", url]]
        : ["xdg-open", [url]];
  try {
    execFile(command, args, () => {});
  } catch {
    // Ignored: the tool answer carries the URL either way.
  }
}

function textResult(text: string, isError = false) {
  return { ...(isError ? { isError: true } : {}), content: [{ type: "text" as const, text }] };
}

export function registerSetupTools(
  server: McpServer,
  store: ChildStore,
  backend: DesktopBackend,
): void {
  server.registerTool(
    "kreta_add_child",
    {
      description:
        "Gyerek hozzáadása vagy a jelszavának frissítése. Megnyit egy beállító oldalt a gépeden, " +
        "ahol az iskola név szerint kereshető. A KRÉTA-jelszót ott kell megadni, nem itt a beszélgetésben.",
      inputSchema: {
        label: z
          .string()
          .optional()
          .describe("A gyerek neve, ha a felhasználó már megmondta. Az oldalon szerkeszthető marad."),
      },
      annotations: { title: "Gyerek hozzáadása", readOnlyHint: false, destructiveHint: false, openWorldHint: true },
    },
    async (args: { label?: string }) => {
      const window = await openSetupWindow({
        store,
        ...(args.label?.trim() ? { label: args.label.trim() } : {}),
      });
      openInBrowser(window.url);

      const timeout = new Promise<"timeout">((resolve) => {
        const timer = setTimeout(() => resolve("timeout"), WAIT_MS);
        timer.unref?.();
      });
      const outcome = await Promise.race([window.finished, timeout]);

      if (outcome === "timeout") {
        return textResult(
          `A beállító oldal megnyílt a böngésződben: ${window.url}\n\n` +
            "Még nem fejezted be. Töltsd ki nyugodtan — ha kész vagy, szólj, és megnézem.",
        );
      }
      if (outcome === null) {
        return textResult(
          "A beállító oldal bezárult mentés nélkül. Ha újra próbálnád, szólj.",
          true,
        );
      }

      backend.forget(outcome.id);
      return textResult(
        `${outcome.label} hozzáadva (${outcome.instituteName ?? outcome.instituteCode}). ` +
          "A belépés sikerült, kérdezhetsz róla.",
      );
    },
  );

  server.registerTool(
    "kreta_list_children",
    {
      description: "A beállított gyerekek listája: kiről lehet kérdezni.",
      inputSchema: {},
      annotations: { title: "Beállított gyerekek", readOnlyHint: true, destructiveHint: false, idempotentHint: true },
    },
    async () => {
      const children = store.list();
      if (children.length === 0) {
        return textResult(
          "Még nincs beállított gyerek. A \"kreta_add_child\" toollal tudsz felvenni egyet.",
        );
      }
      return textResult(
        JSON.stringify({
          children: children.map((child) => ({
            name: child.label,
            institution: child.instituteName ?? child.instituteCode,
            institute_code: child.instituteCode,
            added_at: new Date(child.addedAt).toISOString(),
          })),
        }),
      );
    },
  );

  server.registerTool(
    "kreta_remove_child",
    {
      description:
        "Egy gyerek törlése a beállításokból, a tárolt jelszavával együtt. A KRÉTA-fiókban semmit nem változtat.",
      inputSchema: {
        label: z.string().describe("A gyerek neve, ahogy a listában szerepel."),
      },
      annotations: { title: "Gyerek törlése", readOnlyHint: false, destructiveHint: true, idempotentHint: true },
    },
    async (args: { label: string }) => {
      try {
        const removed = store.remove(args.label);
        if (!removed) {
          const names = store.list().map((child) => child.label).join(", ");
          throw new ToolError(
            names
              ? `Nincs "${args.label}" nevű beállított gyerek. Elérhető: ${names}.`
              : "Nincs beállított gyerek.",
          );
        }
        backend.forget(removed.id);
        return textResult(`${removed.label} törölve, a tárolt jelszavával együtt.`);
      } catch (error) {
        const message =
          error instanceof ToolError || error instanceof StoreError
            ? error.message
            : "A törlés nem sikerült.";
        return textResult(message, true);
      }
    },
  );
}
