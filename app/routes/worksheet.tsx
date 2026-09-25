export { default } from "studyluma/src/milestone/views/worksheet";
type Source = typeof import("studyluma/src/milestone/routes/worksheet");
export async function loader(args: Parameters<Source["loader"]>[0]) {
  return (await import("studyluma/src/milestone/routes/worksheet")).loader(args);
}
export async function action(args: Parameters<Source["action"]>[0]) {
  return (await import("studyluma/src/milestone/routes/worksheet")).action(args);
}
