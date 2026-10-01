import { ArrowRight, BookOpen, FileText, Repeat } from "lucide-react";
import { TextLink } from "@chromatis/base/ui";
import { SiteFooter } from "../SiteFooter";
import "./landing.css";

export function meta() {
  return [
    { title: "StudyLuma – Digitale Lernwege für klareren Unterricht" },
    {
      name: "description",
      content:
        "StudyLuma verbindet strukturierte Lernwege, interaktive Arbeitsblätter und direkte Rückmeldungen für den Unterricht.",
    },
  ];
}

const features = [
  {
    number: "01",
    icon: BookOpen,
    title: "Lernwege",
    description:
      "Themen und Kapitel bilden einen klaren Weg. Lernende sehen, wo sie stehen und was als Nächstes kommt.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Interaktive Arbeitsblätter",
    description:
      "Erklärungen, Beispiele und Aufgaben werden zu einem Arbeitsbereich, in dem Lernende selbst aktiv werden.",
  },
  {
    number: "03",
    icon: Repeat,
    title: "Direkte Rückmeldungen",
    description:
      "Antworten bleiben erhalten und Rückmeldungen helfen dabei, den nächsten Schritt im Lernen zu erkennen.",
  },
] as const;

export default function Landing() {
  return (
    <div className="demo-landing">
      <section
        className="demo-hero surface-emphasis"
        aria-labelledby="demo-title"
      >
        <div className="container container--wide demo-hero-layout">
          <div className="demo-hero-copy">
            <p className="demo-eyebrow">StudyLuma · Lernen mit Klarheit</p>
            <h1 id="demo-title" className="display">
              Digitale Lernwege für klareren Unterricht.
            </h1>
            <p className="lead">
              Strukturierte Inhalte, interaktive Aufgaben und direkte
              Rückmeldungen für den Unterricht.
            </p>
            <div className="cluster demo-hero-actions">
              <TextLink
                to="/login?from=/app"
                standalone
                className="demo-cta-primary"
              >
                Demo öffnen <ArrowRight className="icon" aria-hidden="true" />
              </TextLink>
              <TextLink to="/roadmap" standalone>
                Fortschritt &amp; Ausblick
              </TextLink>
            </div>
          </div>
          <div className="demo-light-planes" aria-hidden="true">
            <span className="demo-light-plane demo-light-plane-one" />
            <span className="demo-light-plane demo-light-plane-two" />
            <span className="demo-light-plane demo-light-plane-three" />
            <span className="demo-light-line" />
          </div>
        </div>
      </section>

      <section
        className="demo-about surface-accent section"
        aria-labelledby="demo-about-title"
      >
        <div className="container container--wide demo-about-layout">
          <h2 id="demo-about-title" className="h2">
            Was ist StudyLuma?
          </h2>
          <p>
            Lernen heißt, Licht ins Unklare zu bringen. Die Plattform
            unterstützt diesen Prozess, indem sie Inhalte strukturiert
            darstellt, passende Aufgaben bereitstellt und direkte Rückmeldungen
            gibt. Schüler sehen, wo sie stehen. Lehrkräfte sehen, wo die Klasse
            steht. Denn im Fokus steht das Lernen — ohne Werbung, ohne
            Schnickschnack.
          </p>
        </div>
      </section>

      <section
        className="demo-features section"
        aria-labelledby="demo-features-title"
      >
        <div className="container container--wide">
          <div className="demo-features-head">
            <p className="demo-eyebrow">Im Unterricht</p>
            <h2 id="demo-features-title" className="h2">
              Ein Weg, viele Möglichkeiten.
            </h2>
          </div>
          <ol className="demo-feature-list">
            {features.map((feature) => (
              <li key={feature.number}>
                <div className="demo-feature-topline">
                  <span className="demo-feature-icon" aria-hidden="true">
                    <feature.icon className="icon" />
                  </span>
                  <span className="demo-feature-number" aria-hidden="true">
                    {feature.number}
                  </span>
                </div>
                <h3 className="h3">{feature.title}</h3>
                <p>{feature.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="demo-invite section"
        aria-labelledby="demo-invite-title"
      >
        <div className="container container--wide demo-invite-layout">
          <div>
            <p className="demo-eyebrow">Selbst erkunden</p>
            <h2 id="demo-invite-title" className="h2">
              Entdecke die Lernumgebung.
            </h2>
            <p>
              Mit einem Demo-Zugang kannst du den vorbereiteten Kurs öffnen.
            </p>
          </div>
          <TextLink to="/login?from=/app" standalone>
            Zur Anmeldung <ArrowRight className="icon" aria-hidden="true" />
          </TextLink>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
