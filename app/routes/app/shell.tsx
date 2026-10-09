import { House, Map } from "lucide-react";
import type { NavigationItem } from "@chromatis/base/ui";
import type { LoaderFunctionArgs } from "react-router";
import ShellLayout from "studyluma/app/StudyShellLayout";

export async function loader(args: LoaderFunctionArgs) {
  return (await import("studyluma/app/routes/shell")).loader(args);
}

const publicNavigation: readonly NavigationItem[] = [
  {
    id: "start",
    label: "Startseite",
    to: "/",
    icon: <House aria-hidden="true" />,
  },
  {
    id: "roadmap",
    label: "Roadmap",
    to: "/roadmap",
    icon: <Map aria-hidden="true" />,
  },
];

export default function DemoShell() {
  return (
    <ShellLayout extraNavigation={publicNavigation} accountName="Lehrer" />
  );
}
