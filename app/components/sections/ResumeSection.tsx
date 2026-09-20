import * as React from "react";
import Link from "next/link";
import { Resume } from "../Resume";

export function ResumeSection({
  crop,
  isPage,
}: {
  crop?: boolean;
  isPage?: boolean;
}) {
  const Heading = isPage ? "h1" : "h2";

  return (
    <section className="section">
      <div className="container content">
        <Heading className="is-h2">
          Mon parcours <strong>professionnel</strong>
        </Heading>

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
