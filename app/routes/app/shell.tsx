import { House, Map } from "lucide-react";
import type { NavigationItem } from "@chromatis/base/ui";
import ShellLayout from "studyluma/app/routes/shell";

export { loader } from "studyluma/app/routes/shell";

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
