# StudyLuma Demo

Private demo and marketing app for `studyluma.org`. It consumes the public [Website](https://github.com/ChromatisGit/studyluma) package for application routes and owns the public landing page, demo database configuration, assets, and deployment concerns.

The active routes import Website's named `routes/*` and `views/*` package
exports. Demo owns only its landing page and route registry; product behavior,
database migrations, and signed-in views stay in Website's modular monolith.
Demo and Website currently use the sibling Framework checkout through local
`file:` dependencies. A deployable release must pin a published Framework
commit containing these changes in both projects.
During local development, the dependency intentionally uses the sibling Website
checkout (`file:../studyluma-website`). Website's `dev` branch is local, and
`chromacli commit` synchronizes the work through Planning.

## Local setup

Install dependencies with `bun install`. Supply the Website's documented
database, publishing, and seed secrets through process environment injection
from your credential manager or shell. Use a **separate local demo database**;
no `.env` file is required. Then run:

```sh
bun run db:provision
bun run db:apply
bun run dev
```

Publish the sample chapter from the Content checkout with `STUDYLUMA_URL` pointed at this app and the same `PUBLISH_TOKEN`. Then run `bun run seed`. Open `/` for the public landing page or `/login?from=/app` for the app. The setup commands resolve Website's public setup exports and run its framework `db apply` command from the Website package directory. Its schema remains owned by Website. Use a fresh database for the new module migrations.

`bun run check` and `bun run build` verify the wrapper app. Its database and secrets are configured only in this repository or the deployment environment. The public landing page and login page can render locally without database credentials; signing in and viewing course content require the provisioned demo database and seeded users.

## Legacy demo material

`legacy/` contains the previous demo UI, seed SQL, and deployment scripts extracted from Website. They target its retired route and database model and are not part of the active app. The active landing page introduces the learning environment and links to `/login?from=/app` and the public `/roadmap` page.

The Cloudflare deployment path from the old Website remains unverified with the new runtime. Do not deploy the legacy scripts against the new schema.
