import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("./routes/landing.tsx"),
  route("roadmap", "./routes/roadmap.tsx"),
  route("impressum", "./routes/impressum.tsx"),
  route("app", "./routes/home.tsx"),
  route("login", "./routes/login.tsx"),
  route("logout", "./routes/logout.tsx"),
  route("courses/:courseId", "./routes/course.tsx"),
  route("courses/:courseId/teacher", "./routes/teacher.tsx"),
  route("courses/:courseId/topics/:topicId/chapters/:chapterId", "./routes/chapter.tsx"),
  route("w/:publicKey", "./routes/worksheet.tsx"),
  route("api/publish", "./routes/publish.ts"),
] satisfies RouteConfig;
