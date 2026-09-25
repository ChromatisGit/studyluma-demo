export { default } from "studyluma/src/milestone/views/login";
type Source = typeof import("studyluma/src/milestone/routes/login");
export async function loader(args: Parameters<Source["loader"]>[0]) {
  return (await import("studyluma/src/milestone/routes/login")).loader(args);
}
export async function action(args: Parameters<Source["action"]>[0]) {
  return (await import("studyluma/src/milestone/routes/login")).action(args);
}
