import { defineConfig } from "astro/config";
import { createRequire } from "node:module";

/**
 * Az Astro saját, ESM `cookie` példánya. A backend Express-fája a régi,
 * CommonJS változatot húzza be, és workspace-telepítésnél az npm bármelyiket a
 * gyökérbe emelheti: ha az express-é kerül felülre, a puszta "cookie" feloldás
 * azt adja, és az Astro előrenderelése "exports is not defined"-dal áll meg.
 * Ezért nem kézzel írt útvonal és nem is a projekt feloldása dönt, hanem az
 * Astro sajátja — onnan nézve mindig a hozzá tartozó példány jön.
 */
function astroCookie() {
  const fromConfig = createRequire(import.meta.url);
  return createRequire(fromConfig.resolve("astro/package.json")).resolve("cookie");
}

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
  vite: {
    // A produkciós CSP csak külső scriptet enged: ne inlineoljon apró chunkokat.
    build: { assetsInlineLimit: 0 },
    resolve: {
      alias: {
        cookie: astroCookie(),
      },
    },
  },
});
