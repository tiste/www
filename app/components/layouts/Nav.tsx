"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export function Nav() {
  const pathname = usePathname()!;
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
          <Link className="navbar-item" href="/">
            <Image
              className="is-light-mode"
              src={require("@/public/images/favicon.svg")}
              alt="Logo"
              width={68}
              height={68}
            />
            <Image
              className="is-dark-mode"
              src={require("@/public/images/favicon-white.svg")}
              alt="Logo"
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
              className={`navbar-item ${
                pathname == "/" ? "has-text-primary" : ""
              }`}
              href="/"
            >
              Accueil
            </Link>
            <Link
              className={`navbar-item ${
                pathname.startsWith("/projects") ? "has-text-primary" : ""
              }`}
              href="/projects"
            >
              Mes projets
            </Link>
            <Link
              className={`navbar-item ${
                pathname.startsWith("/missions") ? "has-text-primary" : ""
              }`}
              href="/missions"
            >
              Mes missions
            </Link>
            <Link
              className={`navbar-item ${
                pathname.startsWith("/cv") ? "has-text-primary" : ""
              }`}
              href="/cv"
            >
              CV
            </Link>
            <Link
              className={`navbar-item ${
                pathname.startsWith("/contact") ? "has-text-primary" : ""
              }`}
              href="/contact"
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
