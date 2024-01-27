# A Personal Portfolio Website in Remix

- [Remix Docs](https://remix.run/docs)

## Development

This project uses Wrangler for local development to emulate the Cloudflare runtime. This is already wired up package.json as the `dev` script:

```sh
# start the remix dev server and wrangler
npm run dev
```

Once started the development server is reachable at [http://127.0.0.1:8788](http://127.0.0.1:8788).

## Deployment

Cloudflare Pages are currently only deployable through their Git provider integrations.

If you don't already have an account, then [create a Cloudflare account here](https://dash.cloudflare.com/sign-up/pages) and after verifying your email address with Cloudflare, go to your dashboard and follow the [Cloudflare Pages deployment guide](https://developers.cloudflare.com/pages/framework-guides/deploy-anything).

Configure the "Build command" should be set to `npm run build`, and the "Build output directory" should be set to `public`.

## Environment Variables

This project uses the following environment variables, which must be saved to a `.dev.vars` file in the root of the project:

- `GITHUB_PAT` - The GitHub Personal Access Token used to fetch projects from GitHub.