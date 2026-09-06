/**
 * The read-only KRÉTA tool table, shared by every deployment.
 *
 * The tool surface is deliberately a fixed table of student GET endpoints.
 * There is no "call any KRÉTA path" tool, no write verb, and no attachment
 * download — what holds that line is this list, not a permission grant, so
 * adding to it is a product decision rather than a refactor.
 *
 * Where the child's credential lives is the one thing that differs between
 * the hosted service (encrypted in a parent-owned profile store) and the
 * desktop extension (the operating system's keychain, on the parent's own
 * machine). That difference is the whole of `KretaBackend`; everything below
 * it is identical either way.
 */
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { BRAND } from "../brand.js";
import type { KretaClient } from "../kreta/client.js";
import { KretaError } from "../kreta/institute.js";
import { ToolError } from "./errors.js";
import { dateRange, MAX_ITEMS, pack, requireUid, studyTaskUids, validateLimit } from "./shape.js";

/** One child a session may ask about. */
export interface KretaChild {
  /** The name the parent uses when talking to Claude. */
  label: string;
  instituteCode: string;
}

export interface KretaBackend<Child extends KretaChild = KretaChild> {
  /** Every connected child, in a stable order. */
  children(): Child[] | Promise<Child[]>;
  /** A client for one child, opened from this deployment's credential store. */
  clientFor(child: Child): Promise<KretaClient>;
  /**
   * Deployment-specific fields merged into the `kreta_login` answer — where
   * the credential lives and when it was connected. Parents are told this
   * plainly, so it must describe what actually happens.
   */
  describeConnection(child: Child): Record<string, unknown> | Promise<Record<string, unknown>>;
}

export const READ_ONLY = { readOnlyHint: true, destructiveHint: false, idempotentHint: true } as const;

/** The part of the server instructions that is true of every deployment. */
export const KRETA_TOOL_INSTRUCTIONS =
  "A toolok érzékeny oktatási adatokat adhatnak vissza. Csak a felhasználó kifejezett " +
  "kérésére kérj le adatot, és csak a válaszhoz szükséges mezőket jelenítsd meg. " +
  "A KRÉTA-adatokhoz nincs módosító vagy törlő művelet. Ha több gyerek van csatlakoztatva, minden tool " +
  "elfogad egy 'child' paramétert (a gyerek neve) — ha a felhasználó név szerint kérdez " +
  "('Mi van Lillának?'), azt add át; ha egy tool 'child' nélkül hibát ad, a hibaüzenet " +
  "felsorolja az elérhető neveket.";

export const childArg = z
  .string()
  .optional()
  .describe("A gyerek neve, ahogy a csatlakoztatáskor megadtad. Egy gyereknél elhagyható.");
export const limitArg = (fallback: number) =>
  z.number().int().min(1).max(MAX_ITEMS).default(fallback).describe("Legfeljebb ennyi elem.");
const dateArg = (what: string) => z.string().optional().describe(`${what} (YYYY-MM-DD).`);

/** Picks the child a tool call is about, or explains which names exist. */
export function resolveChild<Child extends KretaChild>(children: Child[], requested?: string): Child {
  const names = children.map((child) => child.label).join(", ");
  const wanted = requested?.trim();

  if (children.length === 0) {
    throw new ToolError("Nincs csatlakoztatott gyerek.");
  }
  if (!wanted) {
    if (children.length === 1) return children[0]!;
    throw new ToolError(`Több gyerek van csatlakoztatva, add meg, melyikről kérdezel (child): ${names}.`);
  }

  const match = children.find((child) => child.label.toLowerCase() === wanted.toLowerCase());
  if (!match) {
    throw new ToolError(`Nincs "${wanted}" nevű csatlakoztatott gyerek. Elérhető: ${names}.`);
  }
  return match;
}

/**
 * Registers the whole KRÉTA tool table on an MCP server.
 *
 * Deployments that serve more than KRÉTA (the hosted service also serves
 * Google Classroom) register their own extra tools on the same server.
 */
export function registerKretaTools<Child extends KretaChild>(
  server: McpServer,
  backend: KretaBackend<Child>,
): void {
  /** Wraps a handler so every tool answers structured JSON and safe errors. */
  const tool = (
    name: string,
    description: string,
    schema: z.ZodRawShape,
    handler: (args: Record<string, unknown>, client: KretaClient, child: Child) => Promise<unknown>,
  ): void => {
    server.registerTool(
      name,
      { description, inputSchema: schema, annotations: { ...READ_ONLY, title: description } },
      async (args: Record<string, unknown>) => {
        try {
          const child = resolveChild(await backend.children(), args.child as string | undefined);
          const client = await backend.clientFor(child);
          const payload = await handler(args, client, child);
          return { content: [{ type: "text", text: JSON.stringify(payload) }] };
        } catch (error) {
          // KRÉTA and argument errors are safe, actionable Hungarian text.
          // Anything else is reported without its message, which could carry
          // a URL, a token fragment, or a stack path.
          const message =
            error instanceof ToolError || error instanceof KretaError
              ? error.message
              : "Váratlan hiba a KRÉTA-lekérdezés közben.";
          return { isError: true, content: [{ type: "text", text: message }] };
        }
      },
    );
  };

  /** A tool that is one GET returning a list. */
  const listTool = (name: string, description: string, path: string, defaultLimit = 100): void => {
    tool(name, description, { limit: limitArg(defaultLimit), child: childArg }, async (args, client) =>
      pack(await client.getJson(path), validateLimit(args.limit as number)),
    );
  };

  /** A tool that is one GET over a date range. */
  const rangeTool = (
    name: string,
    description: string,
    path: string,
    params: { from: string; to: string },
    defaults: { start: number; end: number },
  ): void => {
    tool(
      name,
      description,
      {
        start_date: dateArg("Kezdő dátum"),
        end_date: dateArg("Záró dátum"),
        limit: limitArg(100),
        child: childArg,
      },
      async (args, client) => {
        const typed = args as { start_date?: string; end_date?: string; limit: number };
        const { start, end } = dateRange(typed.start_date, typed.end_date, {
          defaultStartDays: defaults.start,
          defaultEndDays: defaults.end,
        });
        const data = await client.getJson(path, { [params.from]: start, [params.to]: end });
        return pack(data, validateLimit(typed.limit));
      },
    );
  };

  tool(
    "kreta_login",
    "A KRÉTA-kapcsolat ellenőrzése és a kapcsolat metaadatai.",
    { child: childArg },
    async (_args, client, child) => {
      // The cheapest authenticated call: proves the stored credential works.
      await client.getJson("sajat/TanuloAdatlap");
      const children = await backend.children();
      return {
        authenticated: true,
        service: BRAND.name,
        label: child.label,
        institution: child.instituteCode,
        read_only: true,
        children: children.map((entry) => entry.label),
        // Diagnostic signal: every observed rotation should also have been
        // persisted by the backend's client factory.
        refresh_token_rotation_observed: client.rotationObserved,
        ...(await backend.describeConnection(child)),
      };
    },
  );

  tool("kreta_student_profile", "A tanuló adatlapjának lekérése.", { child: childArg }, async (_args, client) =>
    pack(await client.getJson("sajat/TanuloAdatlap")),
  );
  tool("kreta_guardian_profile", "A gondviselő adatlapjának lekérése.", { child: childArg }, async (_args, client) =>
    pack(await client.getJson("sajat/GondviseloAdatlap")),
  );

  listTool("kreta_class_groups", "A tanuló osztályainak és csoportjainak lekérése.", "sajat/OsztalyCsoportok");
  listTool("kreta_evaluations", "A tanuló értékeléseinek (jegyeinek) lekérése.", "sajat/Ertekelesek");
  listTool("kreta_absences", "A tanuló mulasztásainak lekérése.", "sajat/Mulasztasok");
  listTool("kreta_notes", "A tanulóhoz tartozó feljegyzések lekérése.", "sajat/Feljegyzesek");
  listTool("kreta_announcements", "A faliújság bejegyzéseinek lekérése.", "sajat/FaliujsagElemek");
  listTool(
    "kreta_school_calendar",
    "A tanév rendjének és intézményi napjainak lekérése.",
    "sajat/Intezmenyek/TanevRendjeElemek",
    200,
  );
  listTool("kreta_lazar_ervin_events", "A Lázár Ervin Programhoz tartozó előadások lekérése.", "Lep/Eloadasok");

  rangeTool(
    "kreta_timetable",
    "Az órarend lekérése egy időszakra.",
    "sajat/OrarendElemek",
    { from: "datumTol", to: "datumIg" },
    { start: 0, end: 7 },
  );
  rangeTool(
    "kreta_homework",
    "A házi feladatok lekérése egy időszakra.",
    "sajat/HaziFeladatok",
    { from: "datumTol", to: "datumIg" },
    { start: -7, end: 14 },
  );
  rangeTool(
    "kreta_announced_tests",
    "A bejelentett számonkérések lekérése egy időszakra.",
    "sajat/BejelentettSzamonkeresek",
    { from: "datumTol", to: "datumIg" },
    { start: 0, end: 30 },
  );
  rangeTool(
    "kreta_consulting_hours",
    "A fogadóórák lekérése egy időszakra.",
    "sajat/Fogadoorak",
    { from: "datumTol", to: "datumIg" },
    { start: 0, end: 30 },
  );
  rangeTool(
    "kreta_week_schedule",
    "Az intézményi heti órarendi beosztás lekérése.",
    "sajat/Intezmenyek/Hetirendek/Orarendi",
    { from: "orarendElemKezdoNapDatuma", to: "orarendElemVegNapDatuma" },
    { start: -7, end: 14 },
  );

  tool(
    "kreta_timetable_item",
    "Egy órarendi elem részleteinek lekérése.",
    { lesson_uid: z.string().describe("Az órarendi elem uid-ja."), child: childArg },
    async (args, client) =>
      pack(
        await client.getJson("sajat/OrarendElem", {
          orarendElemUid: requireUid(args.lesson_uid as string, "órarendi elem uid"),
        }),
      ),
  );

  tool(
    "kreta_homework_detail",
    "Egy házi feladat részleteinek lekérése.",
    { homework_uid: z.string().describe("A házi feladat uid-ja."), child: childArg },
    async (args, client) => {
      const uid = requireUid(args.homework_uid as string, "házi feladat uid");
      return pack(await client.getJson(`sajat/HaziFeladatok/${encodeURIComponent(uid)}`));
    },
  );

  tool(
    "kreta_consulting_hour_detail",
    "Egy fogadóóra részleteinek lekérése.",
    { consulting_hour_uid: z.string().describe("A fogadóóra uid-ja."), child: childArg },
    async (args, client) => {
      const uid = requireUid(args.consulting_hour_uid as string, "fogadóóra uid");
      return pack(await client.getJson(`sajat/Fogadoorak/${encodeURIComponent(uid)}`));
    },
  );

  tool(
    "kreta_class_averages",
    "A tanuló csoportjaihoz elérhető osztályátlagok lekérése.",
    { limit: limitArg(100), child: childArg },
    async (args, client) => {
      const groups = await client.getJson("sajat/OsztalyCsoportok");
      const averages: unknown[] = [];
      for (const uid of studyTaskUids(groups)) {
        // The mobile API expects this parameter twice at this endpoint.
        const data = await client.getJson("sajat/Ertekelesek/Atlagok/OsztalyAtlagok", [
          ["oktatasiNevelesiFeladatUid", uid],
          ["oktatasiNevelesiFeladatUid", uid],
        ]);
        if (Array.isArray(data)) averages.push(...data);
        else if (data !== null && data !== undefined) averages.push(data);
      }
      return pack(averages, validateLimit(args.limit as number));
    },
  );

  tool(
    "kreta_device_status",
    "A tárgyi eszköz kiosztási és regisztrációs állapotának lekérése.",
    { child: childArg },
    async (_args, client) => ({
      assigned: await client.getJson("TargyiEszkoz/IsEszkozKiosztva"),
      registered: await client.getJson("TargyiEszkoz/IsRegisztralt"),
    }),
  );
}
