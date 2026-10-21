import { withRequestScope } from "@chromatis/base/request-scope";
import { loadCourses, loadSheets } from "@studyluma/app/app/site.server";

/** The task the landing page shows, picked by its title in the demo course. */
const SAMPLE_TASK_TITLE = "Addieren und subtrahieren";

/**
 * The landing page's sample: a task with Fehler feedback, a Tipp and Schritte
 * (see content/.../02-bruchrechnung). It always comes from the redacted student
 * catalog, whoever asks (a request that only says "student" has no Classroom
 * Session, so nothing is released), while the course order is the visitor's own.
 * The student's reading gets its own request scope: the visitor's, memoised
 * by the root loader, may be a teacher's.
 */
export function sampleTask(request: Request) {
  const student = new Request(request.url, {
    headers: { Cookie: "studyluma-viewer=student" },
  });
  const courses = loadCourses(request);
  return withRequestScope(() => findSample(student, courses));
}

async function findSample(
  student: Request,
  courses: ReturnType<typeof loadCourses>,
) {
  for (const course of courses) {
    for (const topic of course.topics) {
      for (const chapter of topic.chapters) {
        const data = await loadSheets(student, course.id, chapter.id, "all");
        for (const sheet of data?.sheets ?? []) {
          for (const section of sheet.sections) {
            for (const item of section.items) {
              if (
                item.type === "task" &&
                item.task.title === SAMPLE_TASK_TITLE
              ) {
                return { chapter: data, aufgabeId: item.task.id };
              }
            }
          }
        }
      }
    }
  }
  return { chapter: undefined, aufgabeId: "" };
}
