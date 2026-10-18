import { loadCourses, loadSite } from "@studyluma/app/app/site.server";
import { sheetsFor } from "@studyluma/app/modules/courses";

/** The task the landing page shows, picked by its title in the demo course. */
const SAMPLE_TASK_TITLE = "Brüche addieren";

/**
 * The landing page's sample: a task with Fehler feedback, a Tipp and Schritte
 * (see content/.../02-bruchrechnung). It always comes from the redacted student
 * catalog, whoever asks (a request that only says "student" has no Classroom
 * Session, so nothing is released), while the course order is the visitor's own.
 */
export async function sampleTask(request: Request) {
  const student = new Request(request.url, {
    headers: { Cookie: "studyluma-viewer=student" },
  });
  const site = {
    courses: loadCourses(request),
    viewer: "student" as const,
    catalog: (await loadSite(student)).catalog,
    releasedSolutions: [],
    sessionSheets: null,
  };
  for (const course of site.courses) {
    for (const topic of course.topics) {
      for (const chapter of topic.chapters) {
        const data = sheetsFor(site, course.id, chapter.id);
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
