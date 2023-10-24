import * as React from "react";

export function SkillsSection() {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-8 is-offset-2">
            <p className="is-size-3">
              Mon expérience dans le monde du web dans des missions très
              diverses, m'a convaincu que la{" "}
              <b className="emphase">fluidité de la communication</b> et qu'un
              code bien designé sont des clés nécessaires dans la réussite d’un
              projet.
            </p>

            <hr />

            <p className="is-size-3">
              Je maîtrise principalement les langages et frameworks du monde
              Javascript. Je suis également impliqué dans un certain nombre de
              méthodes liées à l’<b className="emphase">agilité</b> et au{" "}
              <strong className="emphase">software craftsmanship</strong> pour
              faire grandir les équipes que j’accompagne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
