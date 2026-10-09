import { redirect, type LoaderFunctionArgs } from "react-router";
import { loadSite } from "studyluma/app/site.server";
import { courseOverviewPath } from "studyluma/modules/courses";
import { viewerCookie } from "../demo/viewerCookie";

/**
 * "Demo öffnen": no credentials. The visitor starts as a teacher in the
 * demo course. Everything they enter stays in
 * their own browser, and each visitor gets their own room for the live
 * quiz, so visitors can't change each other's demo.
 */
export async function loader({ request }: LoaderFunctionArgs) {
  const course = (await loadSite(request)).courses[0];
  const target = course ? courseOverviewPath(course.id) : "/courses";
  const headers = new Headers();
  headers.append("Set-Cookie", viewerCookie("teacher"));
  return redirect(target, { headers });
}
