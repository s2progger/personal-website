import { type PlatformProxy } from "wrangler";

interface Env {
  GITHUB_PAT: string;
  FULL_CONTACT_KEY: string;
  RESUME_CONTACT_EMAIL: string;
  RESUME_CONTACT_PHONE: string;
}

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: Cloudflare;
  }
}
