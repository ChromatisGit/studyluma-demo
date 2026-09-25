export { default } from "studyluma/views/chapter";
type LoaderSource = typeof import("studyluma/routes/chapter");
export async function loader(args: Parameters<LoaderSource["loader"]>[0]) {
  return (await import("studyluma/routes/chapter")).loader(args);
}
