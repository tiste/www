import { CV, Mission } from "./CV";
import * as React from "react";

export function Resume({
  missions = CV,
  compact,
}: {
  missions?: Mission[];
  compact?: boolean;
}) {
  return (
    <ul className={`resume-items content${compact ? " is-compact" : ""}`}>
      {missions.map((mission, index) => {
        const heading = (
          <>
            <h4>
              {mission.title} <small>– {mission.customer}</small>
            </h4>
            <small>{mission.date}</small>
          </>
        );
        const description = (
          <div
            dangerouslySetInnerHTML={{
              __html: mission.description
                .replace("\n", "")
                .replace(/\n/g, "<br />"),
            }}
          />
        );

        return (
          <li key={index}>
            {compact ? (
              <details>
                <summary>{heading}</summary>
                {description}
              </details>
            ) : (
              <>
                <header>{heading}</header>
                {description}
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
}
