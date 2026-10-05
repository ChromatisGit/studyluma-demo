import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

const chapter = "courses/:courseId/chapters/:chapterId";

/** Public pages of the demo, then the website's own routes from the package. */
export default [
  layout("PublicShell.tsx", [
    index("routes/landing.tsx"),
    route("roadmap", "routes/roadmap.tsx"),
    route("impressum", "routes/impressum.tsx"),
  ]),
  route("demo", "routes/demo.ts"),
  layout("routes/app/shell.tsx", [
    route("courses", "routes/app/home.tsx"),
    route("courses/:courseId", "routes/app/course.tsx"),
    route(chapter, "routes/app/chapter.tsx"),
    route(`${chapter}/sheets/:sheetId`, "routes/app/sheet.tsx"),
    route(`${chapter}/challenges`, "routes/app/challenges.tsx"),
    route("courses/:courseId/quiz", "routes/app/quiz.tsx"),
  ]),
  route(`${chapter}/lesson`, "routes/app/lesson.tsx"),
  route(`${chapter}/lesson/projector`, "routes/app/projector.tsx"),
  route("viewer", "routes/app/viewer.ts"),
  route("live", "routes/app/live.ts"),
] satisfies RouteConfig;
