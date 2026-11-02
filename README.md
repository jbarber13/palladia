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

   <Image src={asset('images/headshot.jpg')} alt="Photo of ..." ratio="1 / 1" />
   ```

   Without `src`, `Image` renders a striped placeholder box.

3. **Logo:** `src/assets/Logo.svg` is the original from the client. It's actually a 2048px JPEG inside an SVG wrapper (1.35 MB), so the site uses resized, transparent-cutout copies instead (`logo-160.webp`, `logo-640.webp`, `favicon.png`, plus `static/apple-touch-icon.png` and `static/og-image.jpg`). Regenerate those if the logo changes. A true vector logo from the designer would be better.

Always use `resolve('/page')` for internal links and `asset('file')` for static files (both from `$app/paths`) so links keep working under the GitHub Pages sub-path.

### Contact form

GitHub Pages can't process form submissions, so the form posts to a third-party service. Until `contactForm.id` in `src/lib/site.ts` is set, the form is displayed but disabled.

Two providers are supported out of the box (switch with `contactForm.provider`):

|                          | Formspree (default)  | Web3Forms            |
| ------------------------ | -------------------- | -------------------- |
| Free submissions / month | 50                   | 250                  |
| Dashboard history (free) | 30 days              | 30 days              |
| Spam filtering, honeypot | Yes                  | Yes (+ hCaptcha)     |
| Restrict to your domain  | Yes (free)           | Paid only            |
| Paid tier                | from $10/mo (200/mo) | from $12/mo (10k/mo) |

**Setup (Formspree):**

1. Sign up at <https://formspree.io> using the inbox that should receive messages, and verify it.
2. Create a form → copy the ID from its endpoint (`https://formspree.io/f/<ID>`).
3. Paste it into `contactForm.id`, commit, and push.
4. In Formspree form settings, enable **Restrict to domain** → `palladiamt.com` once the domain is live.
5. Send a test message from the live site.

**Setup (Web3Forms):** create an access key at <https://web3forms.com>, set `provider: 'web3forms'` and paste the key into `id`. (The key is designed to be public.)

The form includes a hidden honeypot field for spam, an inline success/error message, and falls back to a normal form POST if JavaScript is disabled.

> Neither service's standard plan is HIPAA-compliant. The form asks visitors not to include health details; keep it that way.

### Privacy policy

`src/routes/privacy/+page.svelte` is a boilerplate policy covering the contact form and hosting. Review it with the owner before launch, update `privacyPolicyUpdated` in `site.ts` when it changes, and revise it if analytics, cookies, embeds, or a newsletter are ever added.

### Domain

The site assumes `https://palladiamt.com` (`site.url` in `site.ts`), used for canonical links, `sitemap.xml`, and `robots.txt`. To connect it: in GitHub **Settings → Pages → Custom domain** enter the domain, then add the DNS records GitHub shows at the registrar (apex `A` records + `www` `CNAME`), and enable **Enforce HTTPS**. No code change is needed; the deploy workflow drops the `/palladia` base path automatically.

### Adding a page

Create `src/routes/<name>/+page.svelte` (copy an existing page as a starting point) and add it to `src/lib/nav.ts`.

## Deploying (GitHub Pages)

1. Create a GitHub repo and push this project to `main`.
2. On GitHub: **Settings → Pages → Source: GitHub Actions**.
3. Every push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes the site.

The workflow sets `BASE_PATH` automatically (e.g. `/palladia` for `https://<user>.github.io/palladia`). If you add a custom domain later, configure it under Settings → Pages; the base path becomes empty automatically.

To test a sub-path build locally: `BASE_PATH=/palladia npm run build`.
