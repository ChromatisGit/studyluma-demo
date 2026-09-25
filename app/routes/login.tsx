export { default } from "studyluma/views/login";
type LoaderSource = typeof import("studyluma/routes/login");
export async function loader(args: Parameters<LoaderSource["loader"]>[0]) {
  return (await import("studyluma/routes/login")).loader(args);
}
type ActionSource = typeof import("studyluma/routes/login");
export async function action(args: Parameters<ActionSource["action"]>[0]) {
  return (await import("studyluma/routes/login")).action(args);
}
