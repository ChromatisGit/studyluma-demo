import { Page, TextLink } from "@chromatis/base/ui";
import { SiteFooter } from "../SiteFooter";
import TEXT from "../site.de.json";

export function meta() {
  return [
    { title: TEXT.impressum.metaTitle },
    { name: "description", content: TEXT.impressum.metaDescription },
  ];
}

export default function Impressum() {
  return (
    <>
      <Page title={TEXT.impressum.metaTitle} className="section">
        <div className="stack stack-600">
          <TextLink to="/">← {TEXT.back}</TextLink>
          <h1 className="h1">{TEXT.impressum.title}</h1>
          <div className="prose">
            <p>{TEXT.impressum.project}</p>
            <p>
              {TEXT.impressum.contact}{" "}
              <a className="link" href={TEXT.contact}>
                {TEXT.impressum.email}
              </a>
            </p>
            <p className="small muted">{TEXT.impressum.address}</p>
          </div>
        </div>
      </Page>
      <SiteFooter />
    </>
  );
}
