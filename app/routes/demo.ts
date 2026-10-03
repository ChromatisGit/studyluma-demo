import { redirect } from "react-router";
import { listCourses } from "studyluma/modules/courses";
import { viewerCookie } from "studyluma/modules/viewer";

/**
 * "Demo öffnen": no credentials. The visitor starts as a student in the
 * demo course and gets the welcome dialog. Everything they enter stays in
 * their own browser, so visitors can't change each other's demo.
 */
export function loader() {
  const course = listCourses()[0];
  const target = course
    ? `/courses/${encodeURIComponent(course.id)}?welcome=1`
    : "/courses";
  return redirect(target, {
    headers: { "Set-Cookie": viewerCookie("student") },
  });
}
