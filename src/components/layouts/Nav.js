import React, { useState } from "react";
import Logo from "../../images/favicon.svg";
import { Link } from "gatsby";

export default () => {
  const [navIsOpened, setNavIsOpened] = useState(false);

  function toggleNav() {
    setNavIsOpened(!navIsOpened);
  }

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <Logo />
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
          </div>
        </div>
      </div>
    </nav>
  );
};
