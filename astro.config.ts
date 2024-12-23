import { defineConfig, envField } from "astro/config";

import tailwind from "@astrojs/tailwind";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  env: {
    schema: {
      GITHUB_PAT: envField.string({ context: "server", access: "secret" }),
      FULL_CONTACT_KEY: envField.string({ context: "server", access: "secret" }),
      RESUME_CONTACT_EMAIL: envField.string({ context: "server", access: "secret" }),
      RESUME_CONTACT_PHONE: envField.string({ context: "server", access: "secret" }),
    },
  },
  adapter: cloudflare(),
});
