import React from "react";
import { Layout } from "../components/layouts/Layout";
import { HeadProps, PageProps } from "gatsby";
import { Seo } from "../components/Seo";
import { Bio } from "../components/Bio";
import { Resume } from "../components/Resume";

export default function ResumePage(props: PageProps) {
  return (
    <Layout cssClasses="resume-page">
      <span
        className="tag only-display is-light"
        style={{ position: "absolute", top: "1rem", right: "1rem" }}
      >
        Vous pouvez imprimer cette page
      </span>

      <Bio />
      <ul className="is-greater social-media-list my-5">
        <li className="mr-3">
          <a href="tel:+33634254534" className="emphase has-text-underlined">
            +33 6 34 25 45 34
          </a>
        </li>
        <li>
          <a
            href="mailto:baptiste.lecocq@gmail.com"
            className="emphase has-text-underlined"
          >
            baptiste.lecocq@gmail.com
          </a>
        </li>
      </ul>
      <Resume />
    </Layout>
  );
}

export function Head(props: HeadProps) {
  return (
    <Seo
      title="CV"
      description="Mon expérience dans le monde du web dans des missions très diverses, m'a convaincu que la fluidité de la communication et qu'un code bien designé sont des clés nécessaires dans la réussite d’un projet. Je maîtrise principalement les langages et frameworks du monde Javascript."
    />
  );
}
