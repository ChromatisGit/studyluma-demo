import { Badge, TextLink } from "@chromatis/base/ui";
import {
  Linie,
  LinieStop,
  Pictogram,
  trackFor,
} from "studyluma/modules/courses";
import { SiteFooter } from "../SiteFooter";
import TEXT from "./roadmap.de.json";
import "./roadmap.css";

type Milestone = {
  date: string;
  icon: string;
  title: string;
  body: string[];
  bullets: string[];
  current?: boolean;
};

export function meta() {
  return [
    { title: TEXT.meta.title },
    { name: "description", content: TEXT.meta.description },
  ];
}

/** Where StudyLuma comes from and where it goes, on the same line as the Lernweg. */
export default function Roadmap() {
  const items = TEXT.roadmap as Milestone[];
  const currentIndex = items.findIndex((item) => item.current);
  return (
    <>
      <main className="demo-roadmap">
        <div className="container demo-roadmap-inner">
          <TextLink to="/" className="demo-roadmap-back">
            ← {TEXT.page.backLink}
          </TextLink>
          <header className="demo-roadmap-header">
            <p className="kicker">StudyLuma</p>
            <h1 className="display">{TEXT.page.title}</h1>
            <p className="demo-roadmap-intro">{TEXT.page.intro}</p>
          </header>
          <Linie label={TEXT.page.title}>
            {items.map((item, index) => {
              const status =
                index < currentIndex
                  ? "done"
                  : index === currentIndex
                    ? "current"
                    : "ahead";
              const { up, down } = trackFor(index, items.length, currentIndex, {
                connectTop: false,
              });
              return (
                <LinieStop
                  key={`${item.date}-${item.title}`}
                  kind="step"
                  status={status}
                  up={up}
                  down={down}
                  // The last milestone is open-ended: the line trails off.
                  trail={index === items.length - 1}
                >
                  <div className="roadmap-step">
                    <Pictogram id={item.icon} fallbackLabel={item.title} />
                    <div className="roadmap-step__body">
                      <p className="roadmap-step__date">
                        <span>{item.date}</span>
                        {status === "current" && (
                          <Badge status="info">{TEXT.page.currentBadge}</Badge>
                        )}
                      </p>
                      <h2 className="roadmap-step__title">{item.title}</h2>
                      {item.body.map((paragraph) => (
                        <p key={paragraph} className="roadmap-step__text">
                          {paragraph}
                        </p>
                      ))}
                      {item.bullets.length > 0 && (
                        <ul className="roadmap-step__list">
                          {item.bullets.map((bullet) => (
                            <li key={bullet}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </LinieStop>
              );
            })}
          </Linie>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
