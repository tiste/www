import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => {
  const staticQuery = graphql`
    query {
      me: file(relativePath: { eq: "me.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={`${staticQuery}`}
      render={(data) => <HeroSection data={data} />}
    />
  );
};

function HeroSection({ data }) {
  return (
    <>
      <section className="hero">
        <div className="hero-body">
          <div className="container content">
            <div className="columns is-vcentered">
              <div className="column is-7">
                <h1 className="title">
                  Bonjour, je suis <strong>Baptiste Lecocq</strong>
                </h1>

                <p>
                  J'aide les personnes et équipes à définir et répondre à{" "}
                  <strong>leurs besoins</strong>. J'y parviens en travaillant
                  pour et avec ces personnes en mettant en place un
                  environnement favorisant <strong>les échanges</strong> et{" "}
                  <strong>l'excellence technique</strong>.
                </p>

                <p>
                  Je considère réussir cette mission en suivant des indicateurs
                  liés à la <strong>satisfaction client</strong> et la{" "}
                  <strong>qualité logicielle</strong>.
                </p>

                <a
                  href="mailto:baptiste.lecocq@gmail.com"
                  className="button is-primary"
                >
                  Contactez-moi
                </a>
              </div>

              <div className="column">
                <Img fluid={data.me.childImageSharp.fluid} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
