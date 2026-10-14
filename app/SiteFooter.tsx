import { Link } from "react-router";
import TEXT from "./site.de.json";
import "./site.css";

/** The quiet footer of the public pages. */
export function SiteFooter() {
  return (
    <footer className="demo-footer">
      <div className="container container--wide demo-footer__inner">
        <span>
          {TEXT.footer.copyright.replace(
            "{year}",
            String(new Date().getFullYear()),
          )}
        </span>
        <span className="demo-footer__tagline">{TEXT.footer.tagline}</span>
        <span className="demo-footer__links">
          <Link className="link" to="/impressum">
            {TEXT.footer.impressum}
          </Link>
        </span>
      </div>
    </footer>
  );
}
