import { Outlet } from "react-router";
import { StudyShell } from "studyluma/study-shell";

export { Layout, ErrorBoundary } from "studyluma/root";

export default function App() {
  return (
    <StudyShell
      coursesPath="/app"
      navigation={[
        { id: "courses", label: "Meine Kurse", to: "/app" },
        { id: "roadmap", label: "Fortschritt & Ausblick", to: "/roadmap" },
      ]}
    >
      <Outlet />
    </StudyShell>
  );
}
