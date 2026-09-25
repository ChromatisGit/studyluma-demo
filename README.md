# StudyLuma Demo

Private demo and marketing app for `studyluma.org`. It consumes the public [Website](https://github.com/ChromatisGit/studyluma) package for application routes and owns the public landing page, demo database configuration, assets, and deployment concerns.

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

Publish the sample chapter from the Content checkout with `STUDYLUMA_URL` pointed at this app and the same `PUBLISH_TOKEN`. Then run `bun run seed`. Open `/` for the public landing page or `/login?from=/app` for the app. The setup commands call the Website package's migration and seed scripts so its schema remains owned by Website.

`bun run check` and `bun run build` verify the wrapper app. Its database and secrets are configured only in this repository or the deployment environment.

## Legacy demo material

`legacy/` contains the previous demo UI, seed SQL, and deployment scripts extracted from Website. They target its retired route and database model and are not part of the active app. The current landing page is intentionally minimal until the marketing UI is adapted to the new Website routes.

The Cloudflare deployment path from the old Website remains unverified with the new runtime. Do not deploy the legacy scripts against the new schema.
