import React from "react";
import { Card } from "../Card";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

export default () => {
  const staticQuery = graphql`
    query {
      setlist_live: file(relativePath: { eq: "projects/setlist-live.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      _1a10: file(relativePath: { eq: "projects/1a10.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
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
      <div className="container content is-hidden-tablet">
        <h2>
          Mes projets <strong>phares</strong>
        </h2>
      </div>

      <div className="columns is-vcentered">
        <div className="column">
          <Card title="Setlist Live" link="https://setlist.live" isApp={true}>
            <Img
              fluid={data.setlist_live.childImageSharp.fluid}
              alt="Setlist Live"
            />

            <p>
              Setlist Live est une application permettant à votre groupe de
              musique de partager votre catalogue musical, et d'en construire
              des setlists à parcourir EN LIVE pendant les concerts. Si vous
              êtes chanteur, le morceau affichera les paroles, sinon, vous
              pouvez lire votre tablature préférée ! Dès que le morceau change,
              tout le monde change !
            </p>

            <p>React Native, iOS, App Store, Android</p>
          </Card>
        </div>
        <div className="column">
          <Card title="1 à 10" link="https://1a10.app" isApp={true}>
            <Img fluid={data._1a10.childImageSharp.fluid} alt="1 à 10" />

            <p>
              Le 1 à 10 est une application de quiz pour jouer en famille ou
              entre amis. Chaque joueur doit s'auto-estimer sur un thème de la
              vie de tous les jours (fromage, bière, devinettes, etc...). Plus
              la note est haute, plus c'est difficile, mais plus tu gagnes de
              points !
            </p>

            <p>React Native, iOS, App Store, Android</p>
          </Card>
        </div>
        <div className="column is-hidden-tablet-only">
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
        <div className="column is-hidden-tablet-only">
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

            <p>React Native, iOS, App Store</p>
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
      </div>

      <div className="container has-text-centered">
        <a href="https://github.com/tiste" className="button is-light mt-4">
          Voir plus de projets sur GitHub
        </a>
      </div>
    </section>
  );
}
