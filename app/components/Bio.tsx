import { InfoCircle } from "./InfoCircle";
import Link from "next/link";
import * as React from "react";

export function Bio() {
  const knowledgeEngineeringInfo = (
    <>
      (
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
      )
    </>
  );

  const nodeJsInfo = (
    <>
      (
      <a
        className="emphase has-text-underlined"
        href="https://www.credly.com/badges/9c737ece-accd-4c5f-b868-17f716bad980/public_url"
      >
        OpenJS Node.js Application Developer – JSNAD
      </a>
      ,{" "}
      <a
        className="emphase has-text-underlined"
        href="https://www.credly.com/badges/4a38a7d8-dab5-45de-b27e-00a8937be3b9/public_url"
      >
        OpenJS Node.js Services Developer – JSNSD
      </a>
      )
    </>
  );

  return (
    <div className="content">
      <h1 className="title">
        <span>
          Bonjour, je suis <br />
        </span>
        <strong>Baptiste Lecocq</strong>
      </h1>

      <p className="is-greater">
        J'aide les personnes et équipes à définir et répondre à{" "}
        <strong>leurs besoins</strong>. J'y parviens en travaillant pour et avec
        ces personnes en mettant en place un environnement favorisant{" "}
        <strong>les échanges</strong> et <strong>l'excellence technique</strong>
        .
      </p>

      <p className="is-greater">
        Je considère réussir cette mission en suivant des indicateurs liés à la{" "}
        <strong>satisfaction client</strong> et la{" "}
        <strong>qualité logicielle</strong>.
      </p>

      <p className="is-greater">
        Je suis certifié aux{" "}
        <a
          className="emphase has-text-underlined"
          href="https://www.octo.academy/fr/parcours-formations/1-pratiques-du-developpement-logiciel-de-qualite"
        >
          pratiques du développement logiciel de qualité
        </a>
        , aux technologies du{" "}
        <InfoCircle
          title="Knowledge Engineering"
          content={knowledgeEngineeringInfo}
        />
        , au développement <InfoCircle title="Node.js" content={nodeJsInfo} />{" "}
        et{" "}
        <a
          className="emphase has-text-underlined"
          href="https://www.credly.com/badges/87112e73-4dcc-43be-8560-3355ba4e298b"
        >
          Professional Scrum Master I
        </a>
        .
      </p>

      <Link
        href="/contact"
        className="button is-primary is-light is-outlined is-rounded mb-5 mt-3 contact-me"
      >
        <span>On travaille ensemble ?</span>
        <span className="icon" role="img" aria-label="handshake">
          🤝
        </span>
      </Link>
    </div>
  );
}
