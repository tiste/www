import * as React from "react";
import { Nav } from "@/app/components/layouts/Nav";
import { Footer } from "@/app/components/layouts/Footer";
import Image from "next-export-optimize-images/image";
import { pageMetadata } from "@/app/services/metadata";

// Page de support et politique de confidentialité de l'app iOS Nocturne.
// App Store Connect : support → https://tiste.io/nocturne, confidentialité → https://tiste.io/nocturne#privacy
const appStoreUrl = ""; // à renseigner une fois l'app créée dans App Store Connect
const supportEmail = "baptiste.lecocq@gmail.com";

export const metadata = pageMetadata({
  title: "Nocturne : respirer, dormir",
  description:
    "Nocturne, app iOS de respiration lente pour le soir : une respiration allume un réverbère, jusqu'à chez toi. Aide et confidentialité.",
  path: "/nocturne",
});

export default function NocturnePage() {
  return (
    <>
      <Nav />
      <section
        className="hero"
        itemScope={true}
        itemType="http://schema.org/SoftwareApplication"
      >
        <div
          className="hero-body"
          itemProp="applicationCategory"
          {...{ content: "HealthApplication" }}
        >
          <div
            className="container content"
            itemProp="operatingSystem"
            {...{ content: "iOS" }}
          >
            <div className="has-text-centered">
              <h1 className="title is-h2" itemProp="name">
                Nocturne
              </h1>
              <p className="subtitle">
                Le soir tombe sur le village. Rentrons doucement, une lumière
                après l&apos;autre.
              </p>

              {appStoreUrl && (
                <a
                  href={appStoreUrl}
                  className="button is-primary is-rounded is-small mt-3"
                  itemProp="url"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Téléchargez pour iPhone</span>
                  <span className="icon" role="img" aria-label="phone">
                    📱
                  </span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container content">
          <div className="columns is-flex-direction-row-reverse">
            <div className="column mt-6">
              <div className="box" id="support" lang="en">
                <h3 className="mt-0">Support</h3>
                <p>
                  A question, a problem with the app or with a purchase? Email{" "}
                  <a href={`mailto:${supportEmail}?subject=Nocturne`}>
                    {supportEmail}
                  </a>
                  . I usually reply within two days.
                </p>
                <p lang="fr" className="mb-0">
                  Une question, un souci avec l&apos;app ou un achat ? Écris à{" "}
                  <a href={`mailto:${supportEmail}?subject=Nocturne`}>
                    {supportEmail}
                  </a>
                  .
                </p>
              </div>

              <p>
                Nocturne est une app de respiration lente pour la fin de
                journée, quand les pensées tournent en boucle et que le sommeil
                tarde à venir.
              </p>
              <p>
                Garde le doigt posé et inspire : la flamme d&apos;un réverbère
                grandit. Relâche et expire : la lumière se pose sur la rue. Une
                respiration, un réverbère, jusqu&apos;à chez toi. Au fil de la
                rue, le village s&apos;endort, et la séance s&apos;arrête
                d&apos;elle-même.
              </p>

              <h3>Aide</h3>
              <p>
                <strong>Comment restaurer mon achat ?</strong> Touche la roue
                crantée à côté du titre, puis « Restaurer un achat ».
                L&apos;achat revient aussi tout seul sur tout appareil connecté
                au même compte Apple.
              </p>
              <p>
                <strong>Je ne sens aucune vibration.</strong> Vérifie Réglages ›
                Sons et vibrations › Retour haptique système. Les vibrations ne
                sont pas disponibles sur iPad.
              </p>
              <p>
                <strong>Rien ne bouge à l&apos;écran.</strong> L&apos;option
                Réduire les animations est sûrement activée (Réglages ›
                Accessibilité › Mouvement) : Nocturne garde alors la scène
                immobile, volontairement.
              </p>
              <p>
                Une autre question ? Écris à{" "}
                <a href={`mailto:${supportEmail}?subject=Nocturne`}>
                  {supportEmail}
                </a>
                .
              </p>

              <hr />
              <h3 id="privacy">Confidentialité</h3>
              <p>
                <em>Dernière mise à jour : octobre 2026.</em>
              </p>
              <p>
                Nocturne ne collecte, ne stocke et ne partage aucune donnée
                personnelle.
              </p>
              <ul>
                <li>Pas de compte, pas de connexion.</li>
                <li>
                  Pas de mesure d&apos;audience, pas de publicité, pas de suivi.
                </li>
                <li>
                  Tes réglages (rythme de respiration, longueur de la rue)
                  restent uniquement sur ton appareil.
                </li>
                <li>
                  Les achats sont entièrement gérés par Apple via l&apos;App
                  Store. Nocturne n&apos;a jamais accès à tes informations de
                  paiement.
                </li>
                <li>
                  Santé, seulement si tu l&apos;actives dans les réglages :
                  chaque chemin y est ajouté comme une séance de pleine
                  conscience. Nocturne n&apos;écrit que ce type de donnée, ne
                  lit jamais rien dans Santé, et ces données restent dans
                  l&apos;app Santé, sous ton contrôle.
                </li>
              </ul>

              <div lang="en">
                <hr />
                <h3>In English</h3>
                <p>
                  Nocturne is a calm breathing app for the end of the day. Keep
                  your finger down and breathe in: the flame of a streetlamp
                  grows. Let go and breathe out: the light spreads over the
                  street. One breath, one streetlamp, all the way home.
                </p>
                <p>
                  <strong>Restore a purchase:</strong> tap the gear icon next to
                  the title, then &quot;Restore purchase&quot;.{" "}
                  <strong>No vibration:</strong> check Settings › Sounds &amp;
                  Haptics › System Haptics. <strong>Nothing moves:</strong>{" "}
                  Reduce Motion is probably on. Any other question? Email{" "}
                  <a href={`mailto:${supportEmail}?subject=Nocturne`}>
                    {supportEmail}
                  </a>
                  .
                </p>
                <p>
                  <strong>Privacy.</strong> Nocturne does not collect, store or
                  share any personal data. No account, no analytics, no
                  advertising, no tracking. Your settings stay on your device.
                  Purchases are handled entirely by Apple; Nocturne never sees
                  your payment details. If you turn on Apple Health in the
                  settings, each path is saved to Health as a mindful session:
                  Nocturne only writes this one type of data, never reads
                  anything from Health, and the data stays in the Health app,
                  under your control.
                </p>
              </div>
            </div>

            <div className="column has-text-centered">
              <Image
                src="/images/projects/pages/nocturne.jpg"
                alt="Nocturne : un réverbère qui s'allume dans un village, la nuit"
                width={400}
                height={869}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
