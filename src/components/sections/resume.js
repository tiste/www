import React from "react";
import { CV } from "../../../content/cv";
import { Link } from "gatsby";

export function ResumeSection({ crop }) {
  return (
    <section className="section">
      <div className="container content">
        <h2>
          Mon parcours <strong>professionnel</strong>
        </h2>

        <div className={"resume " + (crop ? "is-cropped" : "")}>
          <ul>
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
        </div>
      </div>
      {crop && (
        <div className="has-text-centered">
          <Link className="button is-primary is-medium" to="/missions">
            Voir les autres missions
          </Link>
        </div>
      )}
    </section>
  );
}
