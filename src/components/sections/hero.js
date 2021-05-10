import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-body">
        <div className="container content">
          <div className="columns is-vcentered">
            <div className="column is-7">
              <h1 className="title">
                Bonjour, je suis
                <br />
                <strong>Baptiste Lecocq</strong>
              </h1>

              <p className="is-greater">
                J'aide les personnes et équipes à définir et répondre à{" "}
                <strong>leurs besoins</strong>. J'y parviens en travaillant pour
                et avec ces personnes en mettant en place un environnement
                favorisant <strong>les échanges</strong> et{" "}
                <strong>l'excellence technique</strong>.
              </p>

              <p className="is-greater">
                Je considère réussir cette mission en suivant des indicateurs
                liés à la <strong>satisfaction client</strong> et la{" "}
                <strong>qualité logicielle</strong>.
              </p>

              <p className="is-greater">
                Je suis certifié{" "}
                <a
                  className="emphase has-text-underlined"
                  href="https://www.octo.academy/fr/parcours-formations/1-pratiques-du-developpement-logiciel-de-qualite"
                >
                  Pratiques du développement logiciel de qualité
                </a>
                , aux technologies du Knowledge Engineering (
                <a
                  className="emphase has-text-underlined"
                  href="https://www.credential.net/4a384db7-3355-421f-9023-73a9f3296d38"
                >
                  Knowledge Engineering Training
                </a>
                ,{" "}
                <a
                  className="emphase has-text-underlined"
                  href="https://www.credential.net/8b189a15-de52-45d7-a506-e7a2892a58e8"
                >
                  Semantic Web Training
                </a>
                ,{" "}
                <a
                  className="emphase has-text-underlined"
                  href="https://graphacademy.neo4j.com/certificates/d6dd1ef3184ad6ba22690ea499dbb406101651b8475c4498d9af34b10e14d7d3.pdf"
                >
                  Neo4j Professional
                </a>
                ) et{" "}
                <a
                  className="emphase has-text-underlined"
                  href="https://www.scrum.org/certificates/302722"
                >
                  Professional Scrum Master I
                </a>
                .
              </p>

              <Link
                to="/contact"
                className="button is-primary is-light is-outlined is-rounded mb-5 mt-3"
              >
                <span>On travaille ensemble ?</span>
                <span className="icon" role="img" aria-label="handshake">
                  🤝
                </span>
              </Link>
            </div>

            <div className="column">
              <StaticImage
                src="../../images/me.jpeg"
                alt="Baptiste Lecocq"
                placeholder="blurred"
                layout="constrained"
                width={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
