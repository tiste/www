import * as React from "react";
import Image from "next-export-optimize-images/image";

export function Footer() {
  return (
    <footer className="footer section-gray">
      <div className="container content">
        <div className="columns is-centered">
          <div className="column is-4 has-text-centered">
            <Image
              className="is-light-mode"
              src={require("@/public/images/logo.svg")}
              alt="Full logo"
              width={250}
            />
            <Image
              className="is-dark-mode"
              src={require("@/public/images/logo-white.svg")}
              alt="Full logo"
              width={250}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
