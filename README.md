# Personal Portfolio

This is my personal portfolio website built using Remix, Vite, and Cloudflare Workers.

## Remix + Vite + Cloudflare

📖 See the [Remix docs](https://remix.run/docs) and the [Remix Vite docs](https://remix.run/docs/en/main/future/vite) for details on supported features.

## Environment Variables

A wrangler.sample.toml file is provided in the root of the project to demonstrate how to set or add local development 
environment variables. You will need to create a file named `wrangler.toml` from this sample file, and set the 
environment variables in it.

If you are adding a new environment variable, you will also need to add it to `Env` interface in `load-context.ts` so 
that TypeScript knows about it.

## Development

Run the Vite dev server:

```sh
npm run dev
```

To run Wrangler:

```sh
npm run build
npm run start
```

## Deployment

Cloudflare has been connected to the repository and any push to the `main` branch will trigger a deployment. To see a 
preview of a change, you can push to a branch that stats with `feature/` and Cloudflare will create a preview site
and URL for it.

## Node Version

To change the Node version, updates must be made in the following places:

- The docker image in `.devcontainer/devcontainer.json`
- `package.json` under `engines.node` and `volta` (if using Volta)
- In Cloudflare Workers, the Node version is set in the `NODE_VERSION` environment variable