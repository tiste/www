import React from "react";
import { Bio } from "../components/Bio";
import { Resume } from "../components/Resume";
import { pageMetadata } from "@/app/services/metadata";

export const metadata = pageMetadata({
  title: "CV",
  description:
    "CV de Baptiste Lecocq, ingénieur logiciel indépendant à Lille : missions, compétences JavaScript, React, React Native, Node.js et certifications.",
  path: "/cv",
});

export default function ResumePage() {
  return (
    <div className="resume-page">
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
    </div>
  );
}
