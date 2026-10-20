import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { renameSync, rmSync } from "node:fs";
import { fileURLToPath } from "node:url";

/** Cloudflare Pages serves the closest 404.html, so the English one must be a file, not a folder. */
const flatEnglishNotFound = {
  name: "flat-english-not-found",
  hooks: {
    "astro:build:done": ({ dir }) => {
      const root = fileURLToPath(dir);
      renameSync(`${root}en/404/index.html`, `${root}en/404.html`);
      rmSync(`${root}en/404`, { recursive: true });
    },
  },
};

export default defineConfig({
  site: "https://desarrollosguia.com",
  output: "static",
  trailingSlash: "always",
  build: { inlineStylesheets: "never" },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    react(),
    flatEnglishNotFound,
    sitemap({
      filter: (page) => !page.includes("/404"),
      i18n: { defaultLocale: "es", locales: { es: "es-AR", en: "en-US" } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
