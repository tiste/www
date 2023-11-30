import * as React from "react";
import Image from "next/image";
import { Bio } from "@/app/components/Bio";

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
              <Image
                src={require("@/public/images/me.jpeg")}
                alt="Baptiste Lecocq"
                placeholder="blur"
                priority={true}
                sizes="(min-width: 769px) 30vw, 80vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
