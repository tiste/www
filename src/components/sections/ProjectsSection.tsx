import * as React from "react";
import { Card } from "../Card";
import { StaticImage } from "gatsby-plugin-image";
import IosDownloadSvg from "../../images/ios-download.svg";

export function ProjectsSection() {
  return (
    <section className="section section-gray projects-section">
      <div className="container content is-hidden-tablet">
        <h2>
          Mes projets <strong>phares</strong>
        </h2>
      </div>

      <div className="columns is-mobile is-vcentered has-text-justified carousel mx-0">
        <div className="column">
          <Card
            title="Convertisseur temps course"
            link="https://convertisseurtempscourse.fr"
            isApp={true}
          >
            <StaticImage
              src="../../images/projects/swunitch.png"
              alt="Convertisseur temps course"
              placeholder="blurred"
              layout="constrained"
              width={400}
            />

            <p>
              Marre de convertir les minutes par kilomètres en km/h ? Vos amis
              vous demandent souvent combien 50min sur 10km rendent en allure ?
              Cette application sera utile pour vous.
            </p>
            <p>
              Vous pouvez téléchargez la version{" "}
              <a href="https://apps.apple.com/fr/app/swunitch/id1488948143">
                iOS
              </a>{" "}
              et{" "}
              <a href="https://play.google.com/store/apps/details?id=io.tiste.Swunitch">
                Android
              </a>
              , ou tester la{" "}
              <a href="https://convertisseurtempscourse.fr">version web</a>.
            </p>
            <div className="columns is-gapless is-flex app-stores">
              <div className="column is-6-mobile">
                <a
                  href="https://apps.apple.com/fr/app/swunitch/id1488948143"
                  aria-label="iOS"
                >
                  <IosDownloadSvg height={40} />
                </a>
              </div>
              <div className="column is-6-mobile">
                <a
                  href="https://play.google.com/store/apps/details?id=io.tiste.Swunitch"
                  aria-label="Android"
                >
                  <StaticImage
                    src="../../images/android-download.png"
                    alt="Get it on Google Play"
                    placeholder="blurred"
                    layout="fixed"
                    height={40}
                  />
                </a>
              </div>
            </div>

            <p>React Native, iOS, App Store, Android</p>
          </Card>
        </div>
        <div className="column">
          <Card title="Pousse Pousse" link="https://poussepous.se">
            <StaticImage
              src="../../images/projects/poussepousse.jpg"
              alt="Pousse Pousse"
              placeholder="blurred"
              layout="constrained"
              width={400}
            />

            <p>
              Le jeu du puzzle où les cases glissent pour former une image,
              chaque jour. Oui, c'est votre ancien jeu, dans lequel vous
              poussiez des tuiles pendant des minutes (ou des heures).
              Maintenant, essayez de trouver l'image du jour !
            </p>

            <p>React</p>
          </Card>
        </div>
        <div className="column">
          <Card title="Yahtzee" link="https://yahtzeeapp.com">
            <StaticImage
              src="../../images/projects/yahtzee.png"
              alt="Yahtzee"
              placeholder="blurred"
              layout="constrained"
              width={400}
            />

            <p>
              Yahtzee en 3D est un jeu de dés où il faut faire le maximum de
              points en validant des combinaisons. Vous pouvez y jouer seul, à
              plusieurs en local, et même en multi-joueur.
            </p>

            <p>React, Three.js</p>
          </Card>
        </div>
        <div className="column">
          <Card title="Setlist Live" link="https://setlist.live" isApp={true}>
            <StaticImage
              src="../../images/projects/setlist-live.png"
              alt="Setlist Live"
              placeholder="blurred"
              layout="constrained"
              width={400}
            />

            <p>
              Setlist Live est une application permettant à votre groupe de
              musique de partager votre catalogue musical, et d'en construire
              des setlists à parcourir EN LIVE pendant les concerts.
            </p>
            <p>
              Si vous êtes chanteur, le morceau affichera les paroles, sinon,
              vous pouvez lire votre tablature préférée ! Dès que le morceau
              change, tout le monde change !
            </p>
            <div className="columns is-gapless is-flex app-stores">
              <div className="column is-6-mobile">
                <a
                  href="https://apps.apple.com/fr/app/setlist-live/id1558899571"
                  aria-label="iOS"
                >
                  <IosDownloadSvg height={40} />
                </a>
              </div>
              <div className="column is-6-mobile">
                <a
                  href="https://play.google.com/store/apps/details?id=com.lecocqconsulting.setlist"
                  aria-label="Android"
                >
                  <StaticImage
                    src="../../images/android-download.png"
                    alt="Get it on Google Play"
                    placeholder="blurred"
                    layout="fixed"
                    height={40}
                  />
                </a>
              </div>
            </div>

            <p>React Native, iOS, App Store, Android</p>
          </Card>
        </div>
        <div className="column">
          <Card title="1 à 10" link="https://1a10.app" isApp={true}>
            <StaticImage
              src="../../images/projects/1a10.png"
              alt="1 à 10"
              placeholder="blurred"
              layout="constrained"
              width={400}
            />

            <p>
              Le 1 à 10 est une application de quiz pour jouer en famille ou
              entre amis. Chaque joueur doit s'auto-estimer sur un thème de la
              vie de tous les jours (fromage, bière, devinettes, etc...). Plus
              la note est haute, plus c'est difficile, mais plus tu gagnes de
              points !
            </p>
            <div className="columns is-gapless is-flex app-stores">
              <div className="column is-6-mobile">
                <a
                  href="https://apps.apple.com/fr/app/1-%C3%A0-10/id1555319145"
                  aria-label="iOS"
                >
                  <IosDownloadSvg height={40} />
                </a>
              </div>
              <div className="column is-6-mobile">
                <a
                  href="https://play.google.com/store/apps/details?id=io.onetoten.onetoten"
                  aria-label="Android"
                >
                  <StaticImage
                    src="../../images/android-download.png"
                    alt="Get it on Google Play"
                    placeholder="blurred"
                    layout="fixed"
                    height={40}
                  />
                </a>
              </div>
            </div>

            <p>React Native, iOS, App Store, Android</p>
          </Card>
        </div>
        <div className="column">
          <Card title="Pumpkin" link="https://pumpkin-app.co">
            <StaticImage
              src="../../images/projects/pumpkin.png"
              alt="Pumpkin"
              placeholder="blurred"
              layout="constrained"
              width={400}
              style={{
                border: "5px solid #34b3e6",
                borderBottom: 0,
                borderRadius: "0.25rem",
              }}
            />

            <p>
              Construction du site institutionnel Pumpkin, permettant de mettre
              en avant les offres et avantages du service. Sur un socle
              Gatsby/Prismic, le site respecte les principes d'accessibilité,
              rapidité, et d'expérience utilisateur fluide.
            </p>

            <p>Gatsby, Prismic</p>
          </Card>
        </div>
        <div className="column">
          <Card title="Javro" link="https://javro.github.io/">
            <StaticImage
              src="../../images/projects/javro.png"
              alt="Javro"
              placeholder="blurred"
              layout="constrained"
              width={400}
            />

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
            title="Le Scrum est une fenêtre"
            link="https://talks.tiste.io/le-scrum-est-une-fenetre/#/"
          >
            <StaticImage
              src="../../images/projects/scrum.png"
              alt="Scrum"
              placeholder="blurred"
              layout="constrained"
              width={400}
            />

            <p>
              Après de longs mois d’application de “Scrum by the book” dans une
              feature team de 5 personnes, tout est très bien maîtrisé. Un peu
              trop ? Le cadre du Scrum s’est dressé comme un mur devant nous.
            </p>
            <p>
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
