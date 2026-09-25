export { default } from "studyluma/views/home";
type LoaderSource = typeof import("studyluma/routes/home");
export async function loader(args: Parameters<LoaderSource["loader"]>[0]) {
  return (await import("studyluma/routes/home")).loader(args);
}
