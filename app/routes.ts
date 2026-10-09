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
    route("courses/:courseId/overview", "routes/app/course.tsx", {
      id: "course-overview",
    }),
    route("courses/:courseId/course-structure", "routes/app/course.tsx", {
      id: "course-structure",
    }),
    route("courses/:courseId/content", "routes/app/course.tsx", {
      id: "course-content",
    }),
    route(chapter, "routes/app/chapter.tsx"),
    route(`${chapter}/sheets/:sheetId`, "routes/app/sheet.tsx"),
    route(`${chapter}/challenges`, "routes/app/challenges.tsx"),
    route("courses/:courseId/quiz", "routes/app/quiz.tsx"),
  ]),
  route(`${chapter}/lesson`, "routes/app/lesson.tsx"),
  route(`${chapter}/lesson/projector`, "routes/app/projector.tsx"),
  route("live", "routes/app/live.ts"),
  route("content/assets/:assetId", "routes/app/asset.ts"),
  route("api/check", "routes/app/check.ts"),
] satisfies RouteConfig;
