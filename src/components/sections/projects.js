import React from "react";
import { Card } from "../Card";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => {
  const staticQuery = graphql`
    query {
      javro: file(relativePath: { eq: "projects/javro.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      swunitch: file(relativePath: { eq: "projects/swunitch.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scrum: file(relativePath: { eq: "projects/scrum.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sheriff: file(relativePath: { eq: "projects/sheriff.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      git: file(relativePath: { eq: "projects/git.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={`${staticQuery}`}
      render={(data) => <ProjectsSection data={data} />}
    />
  );
};

function ProjectsSection({ data }) {
  return (
    <section className="section">
      <div className="columns is-vcentered">
        <div className="column">
          <Card title="Javro" link="https://javro.github.io/">
            <Img fluid={data.javro.childImageSharp.fluid} alt="Javro" />

            <p>
              Javro est une application permettant d'écrire des fichiers Avro
              avec simplicité, de les valider, et de les visualiser sous la
              forme d'un exemple JSON.
            </p>

            <p>Electron, Kafka</p>
          </Card>
        </div>
        <div className="column">
          <Card
            title="Swunitch"
            link="https://apps.apple.com/fr/app/swunitch/id1488948143"
          >
            <Img fluid={data.swunitch.childImageSharp.fluid} alt="Swunitch" />

            <p>
              Marre de convertir les minutes par kilomètres en km/h ? Vos amis
              vous demandent souvent combien 50min sur 10km rendent en allure ?
              Cette application sera utile pour vous.
            </p>

            <p>iOS, App Store</p>
          </Card>
        </div>
        <div className="column">
          <Card
            title="Le Scrum est une fenêtre"
            link="https://talks.tiste.io/le-scrum-est-une-fenetre/#/"
          >
            <Img
              fluid={data.scrum.childImageSharp.fluid}
              alt="Le Scrum est une fenêtre"
            />

            <p>
              Après de longs mois d’application de “Scrum by the book” dans une
              feature team de 5 personnes, tout est très bien maîtrisé. Un peu
              trop ? Le cadre du Scrum s’est dressé comme un mur devant nous.
              Quelques semaines plus tard, nous avions assisté à une évolution
              des mentalités et des rituels. Nous sommes devenus une équipe plus
              Agile qu’hier, et en constante évolution. Vous voulez aussi
              utiliser Scrum comme une fenêtre vers l’Agilité ?
            </p>

            <p>Talk</p>
          </Card>
        </div>
        <div className="column is-hidden-tablet-only">
          <Card title="Sheriff" link="https://sheriff.rocks">
            <Img fluid={data.sheriff.childImageSharp.fluid} alt="Sheriff" />

            <p>
              Best way to monitor your Pull Request health, without letting
              anyone pass the Sheriff.
            </p>

            <p>Continuous Integration, Quality</p>
          </Card>
        </div>
        <div className="column is-hidden-tablet-only">
          <Card title="git-101" link="https://talks.tiste.io/git-101">
            <Img fluid={data.git.childImageSharp.fluid} alt="git-101" />

            <p>Les basics de git</p>

            <p>Talk</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
