import { Link, useLoaderData } from "react-router";
import { ArrowRight } from "lucide-react";
import {
  Accordion,
  Badge,
  Card,
  CardBody,
  TextLink,
  buttonClassName,
} from "@chromatis/base/ui";
import { getWorksheetChapter, TaskSample } from "studyluma/modules/worksheets";
import SITE from "../site.de.json";
import TEXT from "./landing.de.json";
import "./landing.css";

/** Opens the demo without credentials (see routes/demo.ts). */
const DEMO_ENTRY = "/demo";
const SAMPLE = { chapterId: "9-2", aufgabeId: "potenzregel-noch-eine" };

export function meta() {
  return [
    { title: TEXT.meta.title },
    { name: "description", content: TEXT.meta.description },
  ];
}

export function loader() {
  return { chapter: getWorksheetChapter(SAMPLE.chapterId, "student") ?? null };
}

/** A real task from the demo course: answer it, check it, ask for help. */
function WorksheetSample() {
  const { chapter } = useLoaderData<typeof loader>();
  if (!chapter) {
    return null;
  }
  return (
    <Card
      className="landing-sample"
      surface="default"
      border="default"
      aria-label={TEXT.sample.label}
    >
      <CardBody>
        <div className="cluster landing-sample__top">
          <span className="card__meta">{TEXT.sample.meta}</span>
          <Badge status="info">{TEXT.sample.badge}</Badge>
        </div>
        <div
          className="landing-sample__viewport"
          tabIndex={0}
          aria-label="Interaktive Beispielaufgabe; Inhalt bei Bedarf scrollen"
        >
          <TaskSample chapter={chapter} aufgabeId={SAMPLE.aufgabeId} />
        </div>
      </CardBody>
    </Card>
  );
}

function Hero() {
  return (
    <section className="landing-hero" aria-labelledby="landing-title">
      <div className="landing-hero__margin" aria-hidden="true" />
      <div className="container container--wide landing-hero__grid">
        <div className="landing-hero__copy">
          <h1 id="landing-title" className="display landing-hero__title">
            {TEXT.hero.titleBefore}{" "}
            <span className="landing-highlight">{TEXT.hero.titleGap}</span>{" "}
            {TEXT.hero.titleAfter}
          </h1>
          <p className="lead muted">{TEXT.hero.lead}</p>
          <div className="cluster landing-hero__actions">
            <Link to={DEMO_ENTRY} className={buttonClassName({ size: "lg" })}>
              {TEXT.hero.demo}{" "}
              <ArrowRight className="icon" aria-hidden="true" />
            </Link>
            <TextLink to="#funktionen" standalone>
              {TEXT.hero.what}
            </TextLink>
          </div>
        </div>
        <WorksheetSample />
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section
      id="funktionen"
      className="section landing-section"
      aria-labelledby="features-title"
    >
      <div className="container container--wide landing-overview">
        <div className="landing-overview__context">
          <div className="landing-overview__intro">
            <h2 id="features-title" className="h2">
              {TEXT.features.title}
            </h2>
            <p>{TEXT.features.lead}</p>
          </div>
          <div className="landing-overview__roadmap">
            <h2 className="h2">{TEXT.project.title}</h2>
            <p>{TEXT.project.body}</p>
            <TextLink to="/roadmap" standalone>
              {TEXT.project.link} →
            </TextLink>
          </div>
        </div>
        <div className="landing-overview__details">
          {TEXT.features.items.map((feature) => (
            <div className="landing-feature" key={feature.title}>
              <div className="landing-feature__heading">
                <h3 className="h3">{feature.title}</h3>
                {"badge" in feature && (
                  <Badge status="info">{feature.badge}</Badge>
                )}
              </div>
              <p className="muted">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section
      id="fragen"
      className="section surface-subtle"
      aria-labelledby="faq-title"
    >
      <div className="container container--wide grid">
        <div className="lg-span-4 stack stack-300">
          <h2 id="faq-title" className="h2">
            {TEXT.faq.title}
          </h2>
          <p className="muted">
            {TEXT.faq.missing}{" "}
            <a className="link" href={SITE.contact}>
              {TEXT.faq.write}
            </a>
          </p>
        </div>
        <div className="lg-span-8">
          <Accordion
            items={TEXT.faq.items}
            single
            defaultOpen={["kosten"]}
            headingLevel={3}
          />
        </div>
      </div>
    </section>
  );
}

function Who() {
  return (
    <section
      className="section section--tight landing-section"
      aria-labelledby="who-title"
    >
      <div className="container container--wide landing-who">
        <img
          className="landing-who__photo"
          src="/demo/christian-holst.webp"
          alt={TEXT.who.photoAlt}
          width={88}
          height={88}
          loading="lazy"
        />
        <div className="landing-who__text stack stack-200">
          <h2 id="who-title" className="h4">
            {TEXT.who.title}
          </h2>
          <p className="muted">{TEXT.who.text}</p>
        </div>
        <div className="cluster landing-who__links">
          <a className="link link--standalone" href={SITE.contact}>
            {TEXT.who.feedback}
          </a>
          <a className="link link--standalone" href={TEXT.who.githubUrl}>
            {TEXT.who.github}
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Landing() {
  return (
    <div className="landing">
      <Hero />
      <Overview />
      <Faq />
      <Who />
    </div>
  );
}
