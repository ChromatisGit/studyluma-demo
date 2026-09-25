export { default } from "studyluma/views/course";
type LoaderSource = typeof import("studyluma/routes/course");
export async function loader(args: Parameters<LoaderSource["loader"]>[0]) {
  return (await import("studyluma/routes/course")).loader(args);
}
