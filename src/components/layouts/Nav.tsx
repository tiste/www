import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export function Nav() {
  const [navIsOpened, setNavIsOpened] = useState(false);

  function toggleNav() {
    setNavIsOpened(!navIsOpened);
  }

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <StaticImage
              className="is-light-mode"
              src="../../images/favicon.svg"
              alt="Logo"
              placeholder="blurred"
              width={68}
              height={68}
            />
            <StaticImage
              className="is-dark-mode"
              src="../../images/favicon-white.svg"
              alt="Logo"
              placeholder="blurred"
              width={68}
              height={68}
            />
          </Link>

          <div
            className="navbar-burger burger"
            role="presentation"
            onClick={() => toggleNav()}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>

        <div className={"navbar-menu " + (navIsOpened ? "is-active" : "")}>
          <div className="navbar-start">
            <Link
              className="navbar-item"
              activeClassName="has-text-primary"
              to="/"
            >
              Accueil
            </Link>
            <Link
              className="navbar-item"
              activeClassName="has-text-primary"
              partiallyActive={true}
              to="/projects"
            >
              Mes projets
            </Link>
            <Link
              className="navbar-item"
              activeClassName="has-text-primary"
              partiallyActive={true}
              to="/missions"
            >
              Mes missions
            </Link>
            <Link
              className="navbar-item"
              activeClassName="has-text-primary"
              partiallyActive={true}
              to="/cv"
            >
              CV
            </Link>
            <Link
              className="navbar-item"
              activeClassName="has-text-primary"
              to="/contact"
            >
              <span className="button is-primary is-light is-outlined">
                Contactez-moi
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
