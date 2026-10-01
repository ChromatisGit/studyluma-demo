import { Badge, Card, CardBody, TextLink } from "@chromatis/base/ui";
import { SiteFooter } from "../SiteFooter";
import TEXT from "./roadmap.de.json";
import "./roadmap.css";

export function meta() {
  return [
    { title: TEXT.meta.title },
    { name: "description", content: TEXT.meta.description },
  ];
}

export default function Roadmap() {
  const currentIndex = TEXT.roadmap.findIndex(
    (item) => "current" in item && item.current,
  );

  return (
    <>
      <main className="demo-roadmap surface-subtle">
        <div className="container container--reading demo-roadmap-inner">
          <TextLink className="demo-roadmap-back" to="/" standalone>
            ← {TEXT.page.backLink}
          </TextLink>
          <header className="demo-roadmap-header">
            <p className="demo-roadmap-kicker">StudyLuma</p>
            <h1>{TEXT.page.title}</h1>
            <p className="demo-roadmap-intro">{TEXT.page.intro}</p>
          </header>
          <ol className="demo-roadmap-list" aria-label={TEXT.page.title}>
            {TEXT.roadmap.map((item, index) => {
              const status =
                index === currentIndex
                  ? "current"
                  : currentIndex >= 0 && index < currentIndex
                    ? "complete"
                    : "planned";

              return (
                <li
                  key={`${item.date}-${item.title}`}
                  className={`demo-roadmap-item demo-roadmap-item--${status}`}
                  aria-current={status === "current" ? "step" : undefined}
                >
                  <span className="demo-roadmap-marker" aria-hidden="true" />
                  <Card
                    className="demo-roadmap-card"
                    surface="default"
                    border="default"
                  >
                    <CardBody>
                      <header className="demo-roadmap-card__heading">
                        <span className="demo-roadmap-date">{item.date}</span>
                        {status === "current" && (
                          <Badge status="info">Aktueller Stand</Badge>
                        )}
                      </header>
                      <h2>{item.title}</h2>
                      {item.body.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      <ul>
                        {item.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    </CardBody>
                  </Card>
                </li>
              );
            })}
          </ol>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
