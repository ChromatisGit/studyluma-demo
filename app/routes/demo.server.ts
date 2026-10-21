import type { DataArgs } from "@chromatis/base/data";
import { redirect } from "react-router";
import { loadSite } from "@studyluma/app/app/site.server";
import { courseOverviewPath } from "@studyluma/app/modules/courses";
import { viewerCookie } from "../demo/viewerCookie";

/**
 * "Demo öffnen": no credentials. The visitor starts as a teacher in the
 * first demo course. The Demo runs no Classroom Sessions, so everything they
 * enter stays in their own browser. The cookie makes every loader run again
 * at the target, so the course pages see the new role.
 */
export async function loader({ request }: DataArgs) {
  const course = (await loadSite(request)).courses[0];
  const target = course ? courseOverviewPath(course.id) : "/courses";
  return redirect(target, {
    headers: { "Set-Cookie": viewerCookie("teacher") },
  });
}
