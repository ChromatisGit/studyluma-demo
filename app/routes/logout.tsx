export { default } from "studyluma/src/milestone/views/logout";
type Source = typeof import("studyluma/src/milestone/routes/logout");
export async function action(args: Parameters<Source["action"]>[0]) {
  return (await import("studyluma/src/milestone/routes/logout")).action(args);
}
