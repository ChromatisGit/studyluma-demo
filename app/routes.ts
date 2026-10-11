import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

/**
 * The Demo's own routes. Chromatis appends them after the routes of
 * @studyluma/app (courses, worksheets, lesson views, ...); `/` is replaced
 * (`[routes] omit` in config/app.toml).
 */
export default [
  layout("PublicShell.tsx", [
    index("routes/landing.tsx"),
    route("roadmap", "routes/roadmap.tsx"),
    route("impressum", "routes/impressum.tsx"),
  ]),
  route("demo", "routes/demo.ts"),
] satisfies RouteConfig;
