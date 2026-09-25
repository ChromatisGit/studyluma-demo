export { default } from "studyluma/src/milestone/views/chapter";
type Source = typeof import("studyluma/src/milestone/routes/chapter");
export async function loader(args: Parameters<Source["loader"]>[0]) {
  return (await import("studyluma/src/milestone/routes/chapter")).loader(args);
}
