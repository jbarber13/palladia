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
| Favicon                                         | `src/assets/favicon.png`                            |

Find copy and images still waiting on the client with: `grep -rn TODO src`

### Images & logo

1. Put files in `static/images/` (create the folder if it doesn't exist, e.g. `static/images/headshot.jpg`). Resize photos first (about 1600px on the long edge, JPEG or WebP) to keep pages fast.
2. Pass them to the `Image` / `Hero` components using `asset()`:

   ```svelte
   <script lang="ts">
   	import { asset } from '$app/paths';
   </script>

   <Image src={asset('images/headshot.jpg')} alt="Photo of ..." ratio="1 / 1" />
   ```

   Without `src`, `Image` renders nothing. The Home, About, and Services pages currently have no photo column; to add one, put an `Image` back in a `grid-2` layout next to the text (see the `TODO: add a ... photo` comments in those pages).

3. **Logo:** `src/assets/Logo.svg` is the original from the client. It's actually a 2048px JPEG inside an SVG wrapper (1.35 MB), so the site uses resized, transparent-cutout copies instead (`logo-160.webp`, `logo-640.webp`, `favicon.png`, plus `static/apple-touch-icon.png` and `static/og-image.jpg`). Regenerate those if the logo changes. A true vector logo from the designer would be better.

Always use `resolve('/page')` for internal links and `asset('file')` for static files (both from `$app/paths`) so links keep working under the GitHub Pages sub-path.

### Contact form

GitHub Pages can't process form submissions, so the form posts to a third-party service. **The live form uses Formspree** (form ID `xjyyplwp`, set as `contactForm.id` in `src/lib/site.ts`). If `contactForm.id` is ever empty, the form is displayed but disabled. Submissions and settings (recipient email, allowed domain, spam filtering) are managed in the Formspree dashboard, not in this repo.

Two providers are supported out of the box (switch with `contactForm.provider`):

|                          | Formspree (default)  | Web3Forms            |
| ------------------------ | -------------------- | -------------------- |
| Free submissions / month | 50                   | 250                  |
| Dashboard history (free) | 30 days              | 30 days              |
| Spam filtering, honeypot | Yes                  | Yes (+ hCaptcha)     |
| Restrict to your domain  | Yes (free)           | Paid only            |
| Paid tier                | from $10/mo (200/mo) | from $12/mo (10k/mo) |

**Setting up a new Formspree form** (for example, if the account changes):

1. Sign up at <https://formspree.io> using the inbox that should receive messages, and verify it.
2. Create a form → copy the ID from its endpoint (`https://formspree.io/f/<ID>`).
3. Paste it into `contactForm.id`, commit, and push.
4. In Formspree form settings, enable **Restrict to domain** → `palladiamt.com` (`www` redirects, so the form is only submitted from `palladiamt.com`).
5. Send a test message from the live site and check it isn't in spam.

If submissions fail with a captcha error, turn off reCAPTCHA in the Formspree form settings (the form submits in the background and can't show it). The hidden honeypot field and Formspree's spam filter still apply.

**Setup (Web3Forms):** create an access key at <https://web3forms.com>, set `provider: 'web3forms'` and paste the key into `id`. (The key is designed to be public.)

The form includes a hidden honeypot field for spam, an inline success/error message, and falls back to a normal form POST if JavaScript is disabled.

> Neither service's standard plan is HIPAA-compliant. The form asks visitors not to include health details; keep it that way.

### Privacy policy

`src/routes/privacy/+page.svelte` is a boilerplate policy covering the contact form and hosting. It still needs review by the owner (ideally an attorney), including how long messages are kept and who receives them. Update `privacyPolicyUpdated` in `site.ts` whenever it changes, and revise it if analytics, cookies, embeds, or a newsletter are ever added.

### Domain

The site is published at `https://palladiamt.com` (`site.url` in `site.ts`), used for canonical links, `sitemap.xml`, and `robots.txt`. `www.palladiamt.com` and the old `github.io/palladia` address redirect to it.

DNS is managed in Squarespace (Domains → palladiamt.com → DNS Settings). Records in use:

| Name                                | Type  | Value                                                                                     |
| ----------------------------------- | ----- | ----------------------------------------------------------------------------------------- |
| `@`                                 | A     | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` (GitHub Pages) |
| `www`                               | CNAME | `jbarber13.github.io`                                                                     |
| `_github-pages-challenge-jbarber13` | TXT   | domain-verification code from GitHub (Settings → Pages)                                   |
| `@`                                 | MX    | `smtp.google.com` (priority 1) - **Google Workspace email, do not remove**                |
| `@`                                 | TXT   | `v=spf1 include:_spf.google.com ~all` - **email (SPF), do not remove**                    |
| `google._domainkey`                 | TXT   | Google Workspace DKIM key - **email, do not remove**                                      |
| `_dmarc`                            | TXT   | `v=DMARC1; p=none; rua=mailto:gwen@palladiamt.com` - email policy, monitor only           |

Everything except the first three rows belongs to Google Workspace email. Don't delete those when changing the website's DNS. `_dmarc` is set to `p=none` (monitor only); it can be tightened to `quarantine` later once the reports look clean.

The custom domain is set under GitHub **Settings → Pages**, with **Enforce HTTPS** on (the certificate renews automatically). The deploy workflow drops the `/palladia` base path on its own when a custom domain is set. If the domain ever stops working, check those settings first and then the DNS records above.

### Adding a page

Create `src/routes/<name>/+page.svelte` (copy an existing page as a starting point) and add it to `src/lib/nav.ts`.

## Deploying (GitHub Pages)

Hosting is already set up (**Settings → Pages → Source: GitHub Actions**). Every push to `main` runs `.github/workflows/deploy.yml`, which builds and publishes the site in about a minute. There is no staging site; test changes locally with `npm run dev`, or `npm run build && npm run preview`. You can also re-run a deploy manually from the repo's **Actions** tab (the workflow supports manual runs). GitHub caches pages for about 10 minutes, so changes can take a little while to appear.

The workflow sets `BASE_PATH` automatically (e.g. `/palladia` for `https://<user>.github.io/palladia`). With the custom domain set under Settings → Pages (as it is now), the base path is empty and the site serves from the root.

To test a sub-path build locally: `BASE_PATH=/palladia npm run build`.

## Known limitations

- **Trailing slashes:** pages are served without one (`/about`). Typing `/about/` shows the 404 page. All internal links, canonical URLs, and the sitemap use the no-slash form, so only hand-typed URLs are affected. Changing it would mean setting `trailingSlash: 'always'` and changing every indexed URL, so it's left alone.
- **No custom response headers:** GitHub Pages can't set security headers such as a Content-Security-Policy. This is acceptable for a static brochure site with no logins.
- **No analytics or cookies.** If that changes, update the privacy policy.

## Open items

Still to do (client content and one-time setup):

- [ ] Real copy from the client: bio, approach, the story behind the name and owl, tagline, service area, and real service details. Draft text is in place and marked with `TODO` comments.
- [ ] Photos: headshot and any service or session photos, plus a vector or transparent logo (see "Images & logo").
- [ ] Payment, insurance, cancellation policy, hours, and social links (Services and Contact pages).
- [ ] Privacy policy review by the owner, including the message-retention wording (marked `TODO` in `src/routes/privacy/+page.svelte`).
- [ ] Google Business Profile for local search (same phone and website as the site).
- [ ] Optional: IPv6 `AAAA` records (`2606:50c0:8000::153` through `…8003::153`), and tightening DMARC after a few weeks of reports.

Done:

- [x] Custom domain `palladiamt.com` with HTTPS, domain verified on GitHub.
- [x] Contact form live on Formspree; messages are delivered to gwen@palladiamt.com.
- [x] Email authentication: SPF, DKIM (signing confirmed on in Google Workspace), and DMARC (`p=none`).
- [x] Google Search Console set up with the sitemap submitted.
