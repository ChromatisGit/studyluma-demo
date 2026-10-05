import { Outlet } from "react-router";
import { House, Map, Play } from "lucide-react";
import type { NavigationItem } from "@chromatis/base/ui";
import { StudyShell } from "studyluma/app/StudyShell";
import { SiteFooter } from "./SiteFooter";

const navigation: readonly NavigationItem[] = [
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
  { id: "demo", label: "Demo", to: "/demo", icon: <Play aria-hidden="true" /> },
];

/** Public pages use the same sidebar and phone menu as the Demo course pages. */
export default function PublicShell() {
  return (
    <StudyShell navigation={navigation} footer={<SiteFooter />}>
      <Outlet />
    </StudyShell>
  );
}
