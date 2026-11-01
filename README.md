# Palladia Music Therapy — website

Static site built with [SvelteKit](https://svelte.dev/docs/kit) + TypeScript, prerendered to plain HTML and hosted on GitHub Pages.

## Commands

```sh
npm install        # first time only
npm run dev        # local dev server with live reload (http://localhost:5173)
npm run check      # type-check
npm run build      # produce the static site in build/
npm run preview    # serve the built site locally
npm run format     # auto-format code
```

## Where to edit things

| What                                            | Where                                               |
| ----------------------------------------------- | --------------------------------------------------- |
| Business name, phone, email, service area, etc. | `src/lib/site.ts`                                   |
| Services (Home + Services pages)                | `services` in `src/lib/site.ts`                     |
| Navigation links                                | `src/lib/nav.ts`                                    |
| Colors, fonts, spacing                          | CSS variables at the top of `src/app.css`           |
| Page copy                                       | `src/routes/**/+page.svelte` (search for `TODO`)    |
| Header / footer                                 | `src/lib/components/Header.svelte`, `Footer.svelte` |
| Favicon                                         | `src/lib/assets/favicon.svg`                        |

Find all placeholder content with: `grep -rn TODO src`

### Images & logo

1. Put files in `static/images/` (e.g. `static/images/headshot.jpg`).
2. Pass them to the `Image` / `Hero` components using `asset()`:

   ```svelte
   <script lang="ts">
   	import { asset } from '$app/paths';
   </script>

   <Image src={asset('/images/headshot.jpg')} alt="Photo of ..." ratio="1 / 1" />
   ```

   Without `src`, `Image` renders a striped placeholder box.

3. For the logo, see the comment in `Header.svelte`.

Always use `resolve('/page')` for internal links and `asset('/file')` for static files (both from `$app/paths`) so links keep working under the GitHub Pages sub-path.

### Contact form

GitHub Pages can't process form submissions. Create a free form at [Formspree](https://formspree.io), then set `formEndpoint` in `src/lib/site.ts`. Until then the form is displayed but disabled.

### Adding a page

Create `src/routes/<name>/+page.svelte` (copy an existing page as a starting point) and add it to `src/lib/nav.ts`.

## Deploying (GitHub Pages)

1. Create a GitHub repo and push this project to `main`.
2. On GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes the site.

The workflow sets `BASE_PATH` automatically (e.g. `/palladia` for `https://<user>.github.io/palladia`). If you add a custom domain later, configure it under Settings → Pages; the base path becomes empty automatically.

To test a sub-path build locally: `BASE_PATH=/palladia npm run build`.
