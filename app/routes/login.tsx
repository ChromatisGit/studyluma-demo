import { redirect } from "react-router";
export { default } from "studyluma/views/login";
type LoaderSource = typeof import("studyluma/routes/login");
export async function loader(args: Parameters<LoaderSource["loader"]>[0]) {
  if (!new URL(args.request.url).searchParams.has("from")) {
    throw redirect("/login?from=/app");
  }
  try {
    return await (await import("studyluma/routes/login")).loader(args);
  } catch (response) {
    if (response instanceof Response && response.headers.get("Location") === "/") {
      throw redirect("/app");
    }
    throw response;
  }
}
type ActionSource = typeof import("studyluma/routes/login");
export async function action(args: Parameters<ActionSource["action"]>[0]) {
  return (await import("studyluma/routes/login")).action(args);
}
