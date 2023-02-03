import { CV } from "./CV";
import * as React from "react";

export function Resume() {
  return (
    <ul className="resume-items content">
      {CV.map((mission, index) => (
        <li key={index}>
          <h4>
            {mission.title} <small>– {mission.customer}</small>
          </h4>
          <small>{mission.date}</small>
          <div
            dangerouslySetInnerHTML={{
              __html: mission.description
                .replace("\n", "")
                .replace(/\n/g, "<br />"),
            }}
          />
        </li>
      ))}
    </ul>
  );
}
