import { Link } from "react-router";
import TEXT from "./site.de.json";
import "./site.css";

/** The quiet footer of the public pages. */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container container--wide site-footer__inner">
        <span>
          {TEXT.footer.copyright.replace(
            "{year}",
            String(new Date().getFullYear()),
          )}
        </span>
        <span>{TEXT.footer.tagline}</span>
        <span className="site-footer__links">
          <Link className="link" to="/roadmap">
            {TEXT.footer.roadmap}
          </Link>
          <Link className="link" to="/impressum">
            {TEXT.footer.impressum}
          </Link>
        </span>
      </div>
    </footer>
  );
}
