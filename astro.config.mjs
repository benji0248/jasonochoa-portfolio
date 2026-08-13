import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://benji0248.github.io",
  base: process.env.SITE_BASE || "/jasonochoa-portfolio",
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    responsiveStyles: true,
  },
});
