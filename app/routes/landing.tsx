import { Link } from "react-router";

export function meta() { return [{ title: "StudyLuma Demo" }]; }

export default function Landing() {
  return <main><h1>StudyLuma Demo</h1><p>Erkunde die StudyLuma Lernumgebung.</p><p><Link to="/login?from=/app">Zur Demo anmelden</Link></p></main>;
}
