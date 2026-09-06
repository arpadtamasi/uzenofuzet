/**
 * The desktop extension's entry point: an MCP server on stdio.
 *
 * Everything runs on the parent's machine. There is no relay, no hosted
 * account, no issued token, and nothing to revoke — KRÉTA is called directly
 * from here, and the only thing that persists between sessions is the
 * encrypted password file in the user's own data directory.
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { KRETA_TOOL_INSTRUCTIONS, registerKretaTools } from "@uzenofuzet/core/mcp";
import { DesktopBackend } from "./backend.js";
import { ChildStore, StoreError } from "./store.js";
import { registerSetupTools } from "./tools.js";

const INSTRUCTIONS =
  KRETA_TOOL_INSTRUCTIONS +
  " A bővítmény a felhasználó gépén fut. Ha még nincs beállított gyerek, vagy a felhasználó " +
  "új gyereket akar felvenni, a 'kreta_add_child' toolt hívd — az megnyit egy helyi beállító " +
  "oldalt. Soha ne kérd el a KRÉTA-jelszót a beszélgetésben: azt csak azon az oldalon szabad megadni.";

async function main(): Promise<void> {
  let store: ChildStore;
  try {
    store = await ChildStore.open();
  } catch (error) {
    // stderr is the extension's log; stdout belongs to the MCP protocol.
    process.stderr.write(
      `${error instanceof StoreError ? error.message : "A beállítások nem nyithatók meg."}\n`,
    );
    process.exit(1);
  }

  const backend = new DesktopBackend(store);
  const server = new McpServer({ name: "uzenofuzet", version: "0.1.0" }, { instructions: INSTRUCTIONS });

  registerKretaTools(server, backend);
  registerSetupTools(server, store, backend);

  await server.connect(new StdioServerTransport());
}

void main().catch((error: unknown) => {
  process.stderr.write(`${error instanceof Error ? error.message : String(error)}\n`);
  process.exit(1);
});
