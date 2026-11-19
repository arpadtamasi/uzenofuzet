/**
 * Where feedback from the assistant lands: one anonymous document per
 * message. Nothing here names the parent, the session or a child — the
 * entry is the assistant's account of how a tool behaved, and it has to stay
 * readable by a maintainer without becoming personal data.
 */
import type { Firestore } from "firebase-admin/firestore";

export const FEEDBACK_KINDS = ["bug", "confusing", "missing", "other"] as const;
export type FeedbackKind = (typeof FEEDBACK_KINDS)[number];

export interface FeedbackEntry {
  kind: FeedbackKind;
  message: string;
  /** The tool the feedback is about, when it is about one. */
  tool?: string;
}

export interface FeedbackStore {
  add(entry: FeedbackEntry): Promise<void>;
}

export class FirestoreFeedbackStore implements FeedbackStore {
  readonly #collection;

  constructor(firestore: Firestore) {
    this.#collection = firestore.collection("feedback");
  }

  async add(entry: FeedbackEntry): Promise<void> {
    await this.#collection.add({
      kind: entry.kind,
      message: entry.message,
      ...(entry.tool ? { tool: entry.tool } : {}),
      createdAt: new Date(),
    });
  }
}
