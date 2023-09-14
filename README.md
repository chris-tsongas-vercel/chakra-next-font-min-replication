# Chakra/Next Font-Loading Minimal Reproduction

This repository is meant to pinpoint some issues with theming and font-loading when using:

- Next.js multi-tenant
- Chakra UI themes

This repository is set up with three sites, each wither their own eopnymous Chakra UI theme: `alpha`, `beta`, `gamma`.

Each theme only differs by the fonts it uses.

## Running the site

Run this script:

```sh
> yarn dev
```

And open any of the hosted subdomains in your browser:

- `alpha.localhost:3000`
- `beta.localhost:3000`
- `gamma.localhost:3000`

## In This Branch

- Fonts are set to `preload`.
- Themes are loaded dynamically (client-side).
- Font definitions are loaded dynamically (server-side).
- Themes reference font definitions directly.
- Chakra uses a custom CSS variables root.

### The Issue

All fonts are preloaded, regardless of whether they are used by the site's theme.
