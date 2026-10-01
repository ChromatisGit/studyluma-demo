import { Page, PageHeader, TextLink } from "@chromatis/base/ui";
import { SiteFooter } from "../SiteFooter";
import "./impressum.css";

export function meta() {
  return [
    { title: "Impressum — StudyLuma" },
    {
      name: "description",
      content: "Impressum und Kontaktangaben von StudyLuma.",
    },
  ];
}

export default function Impressum() {
  return (
    <>
      <Page className="demo-impressum">
        <TextLink to="/" standalone>
          ← Zurück zur Startseite
        </TextLink>
        <PageHeader title="Impressum" />
        <article className="prose demo-impressum-inner">
          <p>
            StudyLuma ist ein nicht-kommerzielles Bildungs- und
            Open-Source-Entwicklungsprojekt von Christian Holst.
          </p>
          <p>
            Kontakt:{" "}
            <a href="mailto:christian.contactmail@gmail.com">
              christian.contactmail@gmail.com
            </a>
          </p>
          <p>
            Meine private Wohnanschrift wird aus Gründen des persönlichen
            Schutzes nicht öffentlich angegeben. Für berechtigte rechtliche
            Anliegen kann eine ladungsfähige Anschrift per E-Mail angefragt
            werden.
          </p>
        </article>
      </Page>
      <SiteFooter />
    </>
  );
}
