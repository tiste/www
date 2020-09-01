import React from "react";
import { Card } from "../Card";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";
import Javro from "../../images/projects/javro.gif";

export default ({ color }) => {
  const staticQuery = graphql`
    query {
      swunitch: file(relativePath: { eq: "projects/swunitch.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scrum: file(relativePath: { eq: "projects/scrum.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sheriff: file(relativePath: { eq: "projects/sheriff.png" }) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      git: file(relativePath: { eq: "projects/git.png" }) {
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
      render={(data) => <ProjectsSection data={data} color={color} />}
    />
  );
};

function ProjectsSection({ data }) {
  return (
    <section className="section">
      <div className="columns is-vcentered">
        <div className="column">
          <Card title="Javro" link="https://javro.github.io/">
            <img src={Javro} alt="Javro" />
            <p>
              Javro est une application permettant d'écrire des fichiers Avro
              avec simplicité, de les valider, et de les visualiser sous la
              forme d'un exemple JSON.
            </p>
          </Card>
        </div>
        <div className="column">
          <Card
            title="Swunitch"
            link="https://apps.apple.com/fr/app/swunitch/id1488948143"
          >
            <Img fluid={data.swunitch.childImageSharp.fluid} />
            <p>
              Marre de convertir les minutes par kilomètres en km/h ? Vos amis
              vous demandent souvent combien 50min sur 10km rendent en allure ?
              Cette application sera utile pour vous.
            </p>
          </Card>
        </div>
        <div className="column">
          <Card
            title="Le Scrum est une fenêtre (talk)"
            link="https://talks.tiste.io/le-scrum-est-une-fenetre/#/"
          >
            <Img fluid={data.scrum.childImageSharp.fluid} />
            <p>
              Après de longs mois d’application de “Scrum by the book” dans une
              feature team de 5 personnes, tout est très bien maîtrisé. Un peu
              trop ? Le cadre du Scrum s’est dressé comme un mur devant nous.
              Quelques semaines plus tard, nous avions assisté à une évolution
              des mentalités et des rituels. Nous sommes devenus une équipe plus
              Agile qu’hier, et en constante évolution. Vous voulez aussi
              utiliser Scrum comme une fenêtre vers l’Agilité ?
            </p>
          </Card>
        </div>
        <div className="column is-hidden-tablet-only">
          <Card title="Sheriff" link="https://sheriff.rocks">
            <Img fluid={data.sheriff.childImageSharp.fluid} />
            <p>
              Best way to monitor your Pull Request health, without letting
              anyone pass the Sheriff.
            </p>
          </Card>
        </div>
        <div className="column is-hidden-tablet-only">
          <Card title="git-101" link="https://talks.tiste.io/git-101">
            <Img fluid={data.git.childImageSharp.fluid} />
            <p>Les basics de git</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
