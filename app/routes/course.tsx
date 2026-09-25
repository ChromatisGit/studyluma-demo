export { default } from "studyluma/src/milestone/views/course";
type Source = typeof import("studyluma/src/milestone/routes/course");
export async function loader(args: Parameters<Source["loader"]>[0]) {
  return (await import("studyluma/src/milestone/routes/course")).loader(args);
}
