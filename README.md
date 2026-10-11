# StudyLuma Demo

The Demo instance of StudyLuma: the public marketing site and a curated demo at `studyluma.org` (Cloudflare Worker `studyluma-demo`). It is a [Chromatis](../chromatis-base) instance of the `@studyluma/app` package and a separate repository.

## What it contains

- `package.json`: dependencies on `@chromatis/base` and `@studyluma/app` (and `@studyluma/compiler` as a build-time devDependency), all `workspace:*`, and scripts that call `chromatis`.
- `config/app.toml`: Cloudflare target, domain `studyluma.org`, Worker name `studyluma-demo`. The `classroom` module is disabled (the Demo runs no Classroom Sessions) and the package's `/` route is replaced by the Demo's landing page (`[routes] omit`).
- `config/catalog.toml`: the courses the Demo publishes (see "Curated content" below).
- `content/`: the authoring sources of the demo courses, in the compiler's layout (not there yet).
- `app/`: the Demo's own pages and shell (landing, roadmap, impressum, `/demo`, `PublicShell`, footer) and `app/routes.ts`. Everything else (courses, worksheets, lesson views, `/api/check`, ...) comes from `@studyluma/app` through the generated `.chromatis/app`; the Demo repeats none of it.
- `public/`: favicon, share image, `robots.txt`, `sitemap.xml`, `_headers`, the portrait on the landing page.
- `tsconfig.json`, `eslint.config.js`: one-line stubs written by `chromatis init`.

No Wrangler config, Dockerfile, Vite/React Router config or database: Chromatis generates what is needed under `.chromatis/` and `react-router.config.ts` (git-ignored), and the Demo has no database or secrets.

## Local development

The Demo installs only inside the planning workspace (`/home/ch/dev/studyluma-planning`, see its `CLAUDE.md`):

```sh
cd ~/dev/studyluma-planning
bun install            # may need a second run on a clean checkout
cd studyluma-demo
bun run init           # writes the root stubs and .chromatis/ (run after a fresh clone)
bun run dev
```

`bun run check` (non-mutating), `bun run fix`, `bun run inspect`, `bun run doctor [-- --offline]`, `bun run build` and `bun run deploy` call the matching `chromatis` commands. `doctor` needs a prior `bun run build`. Deployment is run from the workspace.

## Landing page

The landing page shows one real, answerable task. `app/sample.server.ts` picks the first answerable task of the first course from the redacted student catalog, so the sample follows whatever the Demo publishes and shows nothing if no course has such a task.

## Curated content

The Demo has no course sources yet, so `config/catalog.toml` has `courses = []` and `chromatis check`, `build` and `doctor` report that the catalog module needs at least one published course. Which chapters make up the public demo is the Demo's own decision: put the authoring sources in `content/` (compiler layout: `<subject>/<topic>/<chapter>`, `kurse/<id>.yml`, `definitions.yml`) and list the course ids in `config/catalog.toml`.

## Without Classroom Sessions

The Demo has no `/join`, `/:code`, `/classroom` or live quiz; the course pages show no `Klassenzimmer starten`. A visitor opens the Demo at `/demo` as a teacher without credentials, and everything entered stays in their browser.
