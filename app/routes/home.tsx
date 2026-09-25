export { default } from "studyluma/src/milestone/views/home";
type Source = typeof import("studyluma/src/milestone/routes/home");
export async function loader(args: Parameters<Source["loader"]>[0]) {
  return (await import("studyluma/src/milestone/routes/home")).loader(args);
}
