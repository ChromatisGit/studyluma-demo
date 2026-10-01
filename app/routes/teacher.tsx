export { default } from "studyluma/views/teacher";
type RouteSource = typeof import("studyluma/routes/teacher");

export async function loader(args: Parameters<RouteSource["loader"]>[0]) {
  return (await import("studyluma/routes/teacher")).loader(args);
}

export async function action(args: Parameters<RouteSource["action"]>[0]) {
  return (await import("studyluma/routes/teacher")).action(args);
}
