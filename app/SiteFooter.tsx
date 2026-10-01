import { SiteFooter as FrameworkSiteFooter } from "@chromatis/base/ui";
import "./site-footer.css";

export function SiteFooter() {
  return (
    <FrameworkSiteFooter
      brand={<strong>StudyLuma</strong>}
      description="Gebaut mit 💜 fürs Lernen"
      groups={[
        {
          id: "project",
          title: "Projekt",
          links: [
            { label: "Fortschritt & Ausblick", to: "/roadmap" },
            { label: "Impressum", to: "/impressum" },
          ],
        },
      ]}
      bottom={<span>© {new Date().getFullYear()} Christian Holst</span>}
    />
  );
}
