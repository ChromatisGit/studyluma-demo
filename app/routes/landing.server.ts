import type { DataArgs } from "@chromatis/base/data";
import { sampleTask } from "../sample.server";

export async function loader({ request }: DataArgs) {
  const { chapter, aufgabeId } = await sampleTask(request);
  return { chapter: chapter ?? null, aufgabeId };
}
