# Agent instructions

This is the Palladia Music Therapy website: a static SvelteKit site deployed to GitHub Pages (https://palladiamt.com). Every push to `main` goes live in about a minute. There is no staging site.

Requests usually come from a non-technical site owner via chat: small changes to copy, colors, layout, links, or images. Treat each request literally and keep changes small.

## Workflow

1. Start clean and current: `git status` must show no changes, then `git pull --rebase origin main`. If the tree is dirty or the pull fails, stop and report; do not discard or stash anything.
2. Find the right file using the "Where to edit things" table in `README.md`. Most edits are in `src/lib/site.ts`, `src/app.css` (color/spacing variables at the top), `src/routes/**/+page.svelte`, and `src/lib/components/`.
3. Make only the change that was asked for. Do not refactor, reformat unrelated code, rename things, or "improve" nearby content.
4. Verify before every commit: `npm run check && npm run build`. Both must pass. Run `npx prettier --write <changed files>` on the files you touched.
5. Commit granularly: one logical change per commit, so any single change can be reverted on its own. If a request contains several unrelated changes (e.g. "change the phone number and make the buttons green"), make one commit per change.
6. Commit messages: short imperative summary of the visible change, e.g. `Change footer tagline to "..."`, `Make primary buttons darker green`. No prefixes, no emojis.
7. Push directly to `main`: `git push origin main`. No branches or pull requests.
8. Report the commit hash(es) and a one-sentence, plain-language description of each change.

## Undo requests

To undo a change, use `git revert --no-edit <sha>` and push. Never rewrite history: no `git reset --hard` on pushed commits, no `git push --force`, no amending pushed commits.

## Do not change unless the request explicitly asks for it

- `.github/workflows/`, `vite.config.ts`, `svelte.config.js`, `tsconfig.json`, `package.json`, `package-lock.json` (no new dependencies)
- `contactForm` settings and `site.url` in `src/lib/site.ts`
- The privacy policy text (`src/routes/privacy/+page.svelte`), the DNS/domain sections of `README.md`, `AGENTS.md`, `opencode.json`
- `robots.txt`, `sitemap.xml`, and SEO component logic

## Content rules

- Do not invent facts (credentials, prices, insurance, hours, locations, testimonials). Use only the wording the request provides. If something is missing, stop and ask instead of guessing.
- Keep the existing `TODO` comments unless the request fills in that content.
- Colors: change the CSS variables at the top of `src/app.css` rather than hard-coding colors in components. Keep text/background pairs readable (WCAG AA contrast). Mention it in the report if a requested color fails contrast.
- Internal links use `resolve('/page')` and static files use `asset('file')` from `$app/paths` (see README).
- Images go in `static/images/`, resized to about 1600px on the long edge.

## Working directory

Stay inside this repository. Do not read or write files outside it, including `/tmp`.
