import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

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
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-AR", en: "en-US" } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
