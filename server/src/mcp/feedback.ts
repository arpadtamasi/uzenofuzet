/**
 * `send_feedback`: the one tool that writes, and it writes only to this
 * service's own inbox — never to KRÉTA or Google Classroom.
 *
 * The assistant uses it to tell the maintainers how a tool behaved, after
 * asking the parent — a rule the description states and the server cannot
 * check. The message is stored without the parent's id, and a message that names one of
 * the session's children is refused before it is stored, so the inbox cannot
 * quietly turn into a second copy of a child's school data.
 */
import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { BRAND } from "@uzenofuzet/core/brand";
import { ToolError } from "@uzenofuzet/core/mcp";
import { FEEDBACK_KINDS, type FeedbackEntry, type FeedbackStore } from "../feedback/store.js";
import type { SealedSession } from "../oauth/types.js";

const MAX_PER_WINDOW = 5;
const WINDOW_MS = 60 * 60 * 1000;

/**
 * The inbox as a tool call sees it: the store behind a per-parent rate
 * limit. The limit is kept in memory and keyed by uid, which is the only
 * place the uid appears — it is never written next to a message.
 */
export class FeedbackInbox {
  readonly #recent = new Map<string, number[]>();

  constructor(
    private readonly store: FeedbackStore,
    private readonly now: () => number = Date.now,
  ) {}

  async submit(uid: string, entry: FeedbackEntry): Promise<void> {
    const cutoff = this.now() - WINDOW_MS;
    for (const [key, times] of this.#recent) {
      const kept = times.filter((time) => time > cutoff);
      if (kept.length > 0) this.#recent.set(key, kept);
      else this.#recent.delete(key);
    }

    const sent = this.#recent.get(uid) ?? [];
    if (sent.length >= MAX_PER_WINDOW) {
      throw new ToolError("Ebben az órában már elég visszajelzés érkezett. Később küldhetsz újat.");
    }
    await this.store.add(entry);
    this.#recent.set(uid, [...sent, this.now()]);
  }
}

/**
 * True when the text names a child, in any inflected form. Hungarian
 * lengthens a final a/e before a suffix ("Lilla" → "Lillának", "Bence" →
 * "Bencével"), so the last vowel matches either way.
 */
export function mentionsChild(message: string, labels: string[]): boolean {
  const text = message.toLocaleLowerCase("hu");
  return labels
    .flatMap((label) => [label, ...label.split(/\s+/u)])
    .map((name) => name.trim().toLocaleLowerCase("hu"))
    .filter((name) => name.length >= 3)
    .some((name) => {
      const stem = name.replace(/[.*+?^${}()|[\]\\]/gu, "\\$&").replace(/a$/u, "[aá]").replace(/e$/u, "[eé]");
      return new RegExp(`(?<!\\p{L})${stem}`, "u").test(text);
    });
}

export function registerFeedbackTool(server: McpServer, session: SealedSession, inbox: FeedbackInbox): void {
  const title = `Visszajelzés küldése az ${BRAND.name} fejlesztőinek.`;

  server.registerTool(
    "send_feedback",
    {
      description:
        `${title} Akkor hívd, ha egy tool hibásan vagy félreérthetően működött, ha egy kéréshez ` +
        "hiányzott egy képesség, vagy ha a felhasználó maga kér visszajelzést küldeni. A saját " +
        "tapasztalatodat írd le: mit próbáltál, és mi akadályozott. Küldés előtt mondd el a " +
        "felhasználónak, mit küldenél, és csak akkor küldd el, ha beleegyezik. Soha ne írj bele a " +
        "gyerekről vagy a családról semmit: " +
        "se nevet, se jegyet, se iskolát, se üzenetszöveget. A visszajelzés névtelenül tárolódik.",
      inputSchema: {
        kind: z
          .enum(FEEDBACK_KINDS)
          .describe(
            "bug: egy tool hibásan működött; confusing: a leírás, a válasz vagy a hibaüzenet " +
              "félreérthető volt; missing: hiányzott egy képesség; other: bármi más.",
          ),
        message: z
          .string()
          .trim()
          .min(10)
          .max(1000)
          .describe("Mit próbáltál, és mi történt. Személyes adat nélkül, legfeljebb 1000 karakter."),
        tool: z
          .string()
          .regex(/^[a-z_]{1,64}$/u)
          .optional()
          .describe("Az érintett tool neve, ha a visszajelzés egy toolról szól."),
      },
      annotations: {
        title,
        readOnlyHint: false,
        destructiveHint: false,
        idempotentHint: false,
        openWorldHint: false,
      },
    },
    async (args) => {
      try {
        if (mentionsChild(args.message, session.children.map((child) => child.label))) {
          throw new ToolError(
            "A visszajelzésben nem szerepelhet a gyerek neve vagy adata. Fogalmazd meg nevek nélkül, és küldd újra.",
          );
        }
        await inbox.submit(session.uid, {
          kind: args.kind,
          message: args.message,
          ...(args.tool ? { tool: args.tool } : {}),
        });
        return { content: [{ type: "text", text: JSON.stringify({ received: true }) }] };
      } catch (error) {
        const message =
          error instanceof ToolError ? error.message : "A visszajelzést most nem sikerült elmenteni.";
        return { isError: true, content: [{ type: "text", text: message }] };
      }
    },
  );
}
