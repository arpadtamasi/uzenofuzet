/**
 * The one error class whose message is safe to show a parent.
 *
 * Tool handlers surface `ToolError` (and `KretaError`) text verbatim; every
 * other failure is reported without its message, which could carry a URL, a
 * token fragment or a stack path.
 */
export class ToolError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ToolError";
  }
}
