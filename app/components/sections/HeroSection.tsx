import * as React from "react";
import Image from "next-export-optimize-images/image";
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

              <div className="box">
                <a
                  href="https://youtu.be/CjIB-HmZL00"
                  className="emphase has-text-underlined"
                >
                  Regardez ma dernière conférence sur YouTube.
                </a>

                <a href="https://youtu.be/CjIB-HmZL00">
                  <Image
                    src={require("@/public/images/last-conf.jpg")}
                    alt="Conférence"
                    priority={true}
                    placeholder="blur"
                    sizes="(min-width: 769px) 30vw, 80vw"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
