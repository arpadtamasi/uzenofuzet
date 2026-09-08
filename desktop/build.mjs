/**
 * Bundles the extension into `build/`, ready for `mcpb pack`.
 *
 * Everything is bundled into one file rather than shipped as a node_modules
 * tree: the package is smaller, the install has nothing to resolve, and there
 * is no chance of the extension picking up a different copy of a dependency
 * than the one it was tested against.
 */
import { build } from "esbuild";
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = join(here, "build");

rmSync(outDir, { recursive: true, force: true });
mkdirSync(join(outDir, "server"), { recursive: true });

await build({
  entryPoints: [join(here, "src/index.ts")],
  outfile: join(outDir, "server/index.js"),
  bundle: true,
  platform: "node",
  format: "esm",
  target: "node22",
  sourcemap: false,
  minify: false,
  // Some transitive dependencies still reach for `require`; give the ESM
  // bundle one that resolves against this file.
  banner: {
    js: [
      "import { createRequire as __createRequire } from 'node:module';",
      "const require = __createRequire(import.meta.url);",
    ].join("\n"),
  },
});

const manifest = JSON.parse(readFileSync(join(here, "manifest.json"), "utf8"));
const packageVersion = JSON.parse(readFileSync(join(here, "package.json"), "utf8")).version;
if (manifest.version !== packageVersion) {
  throw new Error(`manifest.json says ${manifest.version}, package.json says ${packageVersion}`);
}
writeFileSync(join(outDir, "manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

// The extension's own README, not the repository's — the packaged copy is
// what a parent reads, and it must describe this build, not the service.
cpSync(join(here, "README.md"), join(outDir, "README.md"));
cpSync(join(here, "..", "LICENSE"), join(outDir, "LICENSE"));

process.stdout.write(`built ${join(outDir, "server/index.js")}\n`);
