import { redirect, type LoaderFunctionArgs } from "react-router";
import { loadSite } from "@studyluma/app/app/site.server";
import { courseOverviewPath } from "@studyluma/app/modules/courses";
import { viewerCookie } from "../demo/viewerCookie";

/**
 * "Demo öffnen": no credentials. The visitor starts as a teacher in the
 * first demo course. The Demo runs no Classroom Sessions, so everything they
 * enter stays in their own browser.
 */
export async function loader({ request }: LoaderFunctionArgs) {
  const course = (await loadSite(request)).courses[0];
  const target = course ? courseOverviewPath(course.id) : "/courses";
  const headers = new Headers();
  headers.append("Set-Cookie", viewerCookie("teacher"));
  return redirect(target, { headers });
}
