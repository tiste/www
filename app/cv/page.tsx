import React from "react";
import { Bio } from "../components/Bio";
import { Resume } from "../components/Resume";
import { CV, Mission } from "../components/CV";
import { pageMetadata } from "@/app/services/metadata";

export const metadata = pageMetadata({
  title: "CV",
  description:
    "CV de Baptiste Lecocq, ingénieur logiciel indépendant à Lille : missions, compétences JavaScript, React, React Native, Node.js et certifications.",
  path: "/cv",
});

const DETAILED_SINCE = 2017;

function endYear(mission: Mission) {
  const years = mission.date.match(/\d{4}/g) ?? [];
  return Number(years[years.length - 1]);
}

export default function ResumePage() {
  const recentMissions = CV.filter(
    (mission) => endYear(mission) >= DETAILED_SINCE,
  );
  const olderMissions = CV.filter(
    (mission) => endYear(mission) < DETAILED_SINCE,
  );

  return (
    <div className="resume-page">
      <span
        className="tag only-display is-light"
        style={{ position: "absolute", top: "1rem", right: "1rem" }}
      >
        Vous pouvez imprimer cette page
      </span>

      <p className="resume-headline">Ingénieur logiciel indépendant à Lille</p>
      <Bio />
      <ul className="social-media-list resume-contact">
        <li>
          <a href="tel:+33634254534">+33 6 34 25 45 34</a>
        </li>
        <li>
          <a href="mailto:baptiste.lecocq@gmail.com">
            baptiste.lecocq@gmail.com
          </a>
        </li>
        <li>
          <a href="https://www.lecocqconsulting.com">lecocqconsulting.com</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/baptistelecocq">
            linkedin.com/in/baptistelecocq
          </a>
        </li>
      </ul>

      <h2 className="resume-heading">Expériences</h2>
      <Resume missions={recentMissions} />

      <h2 className="resume-heading">Expériences antérieures</h2>
      <Resume missions={olderMissions} compact />
    </div>
  );
}
