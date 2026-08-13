import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://jasonochoa.com",
  integrations: [sitemap()],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
  image: {
    responsiveStyles: true,
  },
});
