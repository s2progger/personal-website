import { defineConfig, envField } from "astro/config";


import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://simontwogood.dev",
  integrations: [sitemap()],

  env: {
    schema: {
      GITHUB_PAT: envField.string({ context: "server", access: "secret" }),
      FULL_CONTACT_KEY: envField.string({ context: "server", access: "secret" }),
      RESUME_CONTACT_EMAIL: envField.string({ context: "server", access: "secret" }),
      RESUME_CONTACT_PHONE: envField.string({ context: "server", access: "secret" }),
    },
  },

  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },
});