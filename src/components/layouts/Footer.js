import React from "react";
import Logo from "../../images/logo.svg";

export function Footer() {
  return (
    <footer className="footer section-gray">
      <div className="container content">
        <div className="columns is-centered">
          <div className="column is-4 has-text-centered">
            <Logo />
          </div>
        </div>
      </div>
    </footer>
  );
}
