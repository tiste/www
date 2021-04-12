import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function Footer() {
  return (
    <footer className="footer section-gray">
      <div className="container content">
        <div className="columns is-centered">
          <div className="column is-4 has-text-centered">
            <StaticImage
              src="../../images/logo.svg"
              alt="Full logo"
              placeholder="blurred"
              width={250}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
