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
              src="../../images/favicon.svg"
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
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </div>
        </div>

        <div className={"navbar-menu " + (navIsOpened ? "is-active" : "")}>
          <div className="navbar-start">
            <Link className="navbar-item" to="/">
              Accueil
            </Link>
            <Link className="navbar-item" to="/cv">
              Mes missions
            </Link>
            <Link className="navbar-item" to="/contact">
              <span className="button is-primary is-light">Contactez-moi</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
