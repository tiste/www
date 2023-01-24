import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Bio } from "../Bio";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container content">
          <div className="columns">
            <div className="column is-7">
              <Bio />
            </div>

            <div className="column">
              <StaticImage
                src="../../images/me.jpeg"
                alt="Baptiste Lecocq"
                placeholder="blurred"
                layout="constrained"
                width={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}