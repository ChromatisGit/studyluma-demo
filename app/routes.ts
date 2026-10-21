import type { RouteDeclaration } from "@chromatis/base/module";

/**
 * The Demo's own routes. Chromatis appends them after the routes of
 * @studyluma/app (courses, worksheets, lesson views, ...); `/` is replaced
 * (`[routes] omit` in config/app.toml). The public pages are prerendered to
 * HTML at build time for search engines and link previews.
 */
export default [
  {
    layout: true,
    id: "public-shell",
    file: "./PublicShell.tsx",
    children: [
      {
        index: true,
        id: "landing",
        file: "./routes/landing.tsx",
        server: "./routes/landing.server.ts",
        prerender: true,
      },
      {
        path: "roadmap",
        id: "roadmap",
        file: "./routes/roadmap.tsx",
        prerender: true,
      },
      {
        path: "impressum",
        id: "impressum",
        file: "./routes/impressum.tsx",
        prerender: true,
      },
    ],
  },
  {
    path: "demo",
    id: "demo",
    file: "./routes/demo.tsx",
    server: "./routes/demo.server.ts",
  },
] satisfies RouteDeclaration[];
