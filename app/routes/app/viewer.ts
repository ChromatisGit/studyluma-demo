import { redirect, type ActionFunctionArgs } from "react-router";
import { isViewerRole } from "studyluma/modules/viewer";
import { viewerCookie } from "../../demo/viewerCookie";

export function loader() {
  return redirect("/courses");
}

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  const role = form.get("role");
  if (typeof role !== "string" || !isViewerRole(role)) {
    return new Response(null, { status: 400 });
  }

  const redirectTo = form.get("redirectTo");
  const destination =
    typeof redirectTo === "string" &&
    redirectTo.startsWith("/") &&
    !redirectTo.startsWith("//")
      ? redirectTo
      : "/courses";
  return redirect(destination, {
    headers: { "Set-Cookie": viewerCookie(role) },
  });
}
