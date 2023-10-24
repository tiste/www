import * as React from "react";
import Link from "next/link";
import { Resume } from "../Resume";

export function ResumeSection({ crop }: { crop?: boolean }) {
  return (
    <section className="section">
      <div className="container content">
        <h2>
          Mon parcours <strong>professionnel</strong>
        </h2>

        <div className={crop ? "is-cropped" : ""}>
          <Resume />
        </div>
      </div>
      {crop && (
        <div className="has-text-centered">
          <Link className="button is-primary is-medium" href="/missions">
            Voir les autres missions
          </Link>
        </div>
      )}
    </section>
  );
}
