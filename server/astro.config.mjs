import { defineConfig } from "astro/config";
import { createRequire } from "node:module";

export default defineConfig({
  outDir: "./public",
  publicDir: "./web/public",
  srcDir: "./web/src",
  site: "https://uzenofuzet.hu",
  build: {
    assets: "_astro",
    // Keep the production CSP strict: page-level styles must be emitted as
    // files instead of Astro's small inline <style> blocks.
    inlineStylesheets: "never",
  },
  // The backend's Express tree also depends on the older CommonJS `cookie`
  // package. Keep Astro's ESM copy explicit during prerendering — resolved,
  // not spelled out: a workspace install hoists the package to the repository
  // root, so any hand-written path under `server/` points at nothing.
  vite: {
    // A produkciós CSP csak külső scriptet enged: ne inlineoljon apró chunkokat.
    build: { assetsInlineLimit: 0 },
    resolve: {
      alias: {
        cookie: createRequire(import.meta.url).resolve("cookie"),
      },
    },
  },
});
