import { redirect } from "react-router";
import { listCourses } from "studyluma/modules/courses";
import { roomCookie, viewerCookie } from "studyluma/modules/viewer";

/**
 * "Demo öffnen": no credentials. The visitor starts as a student in the
 * demo course and gets the welcome dialog. Everything they enter stays in
 * their own browser, and each visitor gets their own room for the live
 * quiz, so visitors can't change each other's demo.
 */
export function loader() {
  const course = listCourses()[0];
  const target = course
    ? `/courses/${encodeURIComponent(course.id)}?welcome=1`
    : "/courses";
  const headers = new Headers();
  headers.append("Set-Cookie", viewerCookie("student"));
  headers.append("Set-Cookie", roomCookie());
  return redirect(target, { headers });
}
