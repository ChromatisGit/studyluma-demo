export { default } from "studyluma/views/worksheet";
type LoaderSource = typeof import("studyluma/routes/worksheet");
export async function loader(args: Parameters<LoaderSource["loader"]>[0]) {
  return (await import("studyluma/routes/worksheet")).loader(args);
}
type ActionSource = typeof import("studyluma/routes/worksheet");
export async function action(args: Parameters<ActionSource["action"]>[0]) {
  return (await import("studyluma/routes/worksheet")).action(args);
}
