import { Outlet, useLocation } from "react-router";
import { House, Map, Play } from "lucide-react";
import type { NavigationItem } from "@chromatis/base/ui";
import { StudyShell } from "@studyluma/app/app/StudyShell";
import { SiteFooter } from "./SiteFooter";
import TEXT from "./site.de.json";

const navigation: readonly NavigationItem[] = [
  {
    id: "start",
    label: TEXT.navigation.home,
    to: "/",
    icon: <House aria-hidden="true" />,
  },
  {
    id: "roadmap",
    label: TEXT.navigation.roadmap,
    to: "/roadmap",
    icon: <Map aria-hidden="true" />,
  },
  {
    id: "demo",
    label: TEXT.navigation.demo,
    to: "/demo",
    icon: <Play aria-hidden="true" />,
  },
];

/** Public pages use the same sidebar and phone menu as the Demo course pages. */
export default function PublicShell() {
  const { pathname } = useLocation();
  return (
    <StudyShell
      navigation={navigation}
      pageWidth={pathname === "/roadmap" ? "wide" : "default"}
      sidebarFooter={{ full: null, compact: null }}
      footer={<SiteFooter />}
    >
      <Outlet />
    </StudyShell>
  );
}
