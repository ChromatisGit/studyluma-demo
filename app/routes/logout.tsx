export { default } from "studyluma/views/logout";
type ActionSource = typeof import("studyluma/routes/logout");
export async function action(args: Parameters<ActionSource["action"]>[0]) {
  return (await import("studyluma/routes/logout")).action(args);
}
