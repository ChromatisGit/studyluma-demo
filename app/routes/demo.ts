import { redirect } from "react-router";
import { listCourses } from "studyluma/modules/courses";
import { roomCookie } from "studyluma/modules/viewer";
import { viewerCookie } from "../demo/viewerCookie";

/**
 * "Demo öffnen": no credentials. The visitor starts as a teacher in the
 * demo course. Everything they enter stays in
 * their own browser, and each visitor gets their own room for the live
 * quiz, so visitors can't change each other's demo.
 */
export function loader() {
  const course = listCourses()[0];
  const target = course
    ? `/courses/${encodeURIComponent(course.id)}`
    : "/courses";
  const headers = new Headers();
  headers.append("Set-Cookie", viewerCookie("teacher"));
  headers.append("Set-Cookie", roomCookie());
  return redirect(target, { headers });
}
