import * as React from "react";
import Image from "next-export-optimize-images/image";

// Page de support et politique de confidentialité de l'app iOS Nocturne.
// App Store Connect : support → https://tiste.io/nocturne, confidentialité → https://tiste.io/nocturne#privacy
const appStoreUrl = ""; // à renseigner une fois l'app publiée
const supportEmail = "baptiste.lecocq@gmail.com";
const mailto = `mailto:${supportEmail}?subject=Nocturne%20support`;

const faq: { question: string; answer: React.ReactNode }[] = [
  {
    question: "How does a session work?",
    answer: (
      <>
        Tap &ldquo;Take the path&rdquo;. Keep a finger anywhere on the screen to
        breathe in: the flame of the streetlamp grows. Lift it to breathe out:
        the light spreads and you glide to the next lamp. One breath lights one
        streetlamp, all the way to your home. The short street takes about a
        minute and a half.
      </>
    ),
  },
  {
    question: "How do I restore my purchase?",
    answer: (
      <>
        Tap the gear icon next to the &ldquo;Nocturne&rdquo; title, then
        &ldquo;Restore purchase&rdquo;. The purchase also comes back on its own
        on any device signed in with the same Apple Account, and it is shared
        with your Family Sharing group.
      </>
    ),
  },
  {
    question: "How do I save my sessions to Apple Health?",
    answer: (
      <>
        Tap the gear icon, then turn on &ldquo;Save mindful minutes&rdquo; and
        allow it in the Health prompt. Each finished path is saved as a mindful
        session.
      </>
    ),
  },
  {
    question: "I don't feel any vibration.",
    answer: (
      <>
        Check Settings › Sounds &amp; Haptics › System Haptics. Vibrations are
        not available on iPad.
      </>
    ),
  },
  {
    question: "Nothing moves on the screen.",
    answer: (
      <>
        Reduce Motion is probably on (Settings › Accessibility › Motion).
        Nocturne then keeps the scene still on purpose.
      </>
    ),
  },
];

export default function NocturnePage() {
  return (
    <div className="nocturne-page" lang="en">
      <div className="sky" aria-hidden="true" />

      <header className="hero">
        <Image
          src="/images/nocturne/icon.png"
          alt=""
          width={96}
          height={96}
          className="app-icon"
        />
        <h1>Nocturne</h1>
        <p className="tagline">
          Evening falls over the village. Let&apos;s head home slowly, one light
          at a time.
        </p>
        {appStoreUrl && (
          <a
            href={appStoreUrl}
            className="button"
            target="_blank"
            rel="noreferrer"
          >
            Download on the App Store
          </a>
        )}
      </header>

      <main>
        <section id="support" className="card support">
          <h2>Support</h2>
          <p>
            A question, a problem with the app or with a purchase? Write to me,
            I&apos;m the developer and I usually reply within two days.
          </p>
          <a href={mailto} className="button">
            Contact support
          </a>
          <p className="email">
            <a href={mailto}>{supportEmail}</a>
          </p>
        </section>

        <section className="intro">
          <div>
            <h2>About the app</h2>
            <p>
              Nocturne is a calm breathing app for the end of the day, when
              thoughts keep spinning and sleep won&apos;t come. Your own breath
              moves it forward: keep your finger down and breathe in, the flame
              of a streetlamp grows; let go and breathe out, the light spreads
              over the street. As you walk, the village falls asleep, and the
              session ends on its own.
            </p>
          </div>
          <Image
            src="/images/nocturne/screenshot.jpg"
            alt="A streetlamp lighting up in a sleeping village at night"
            width={480}
            height={1044}
            className="screenshot"
          />
        </section>

        <section id="help">
          <h2>Help</h2>
          {faq.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
          <p className="more">
            Another question? <a href={mailto}>Contact support</a>.
          </p>
        </section>

        <section id="privacy">
          <h2>Privacy policy</h2>
          <p className="updated">Last updated: October 2026</p>
          <p>Nocturne does not collect, store or share any personal data.</p>
          <ul>
            <li>No account, no sign-in.</li>
            <li>No analytics, no advertising, no tracking.</li>
            <li>
              Your settings (breathing rhythm, street length) are stored only on
              your device.
            </li>
            <li>
              Purchases are handled entirely by Apple through the App Store.
              Nocturne never sees your payment details.
            </li>
            <li>
              Apple Health, only if you turn it on in the settings: each path is
              saved as a mindful session. Nocturne only writes this one type of
              data, never reads anything from Health, and the data stays in the
              Health app, under your control.
            </li>
          </ul>
          <p>
            Questions about privacy: <a href={mailto}>{supportEmail}</a>.
          </p>
        </section>

        <section id="fr" lang="fr" className="french">
          <h2>En français</h2>
          <p>
            Une question, un souci avec l&apos;app ou un achat ? Écris à{" "}
            <a href={mailto}>{supportEmail}</a>, je réponds en général sous deux
            jours.
          </p>
          <p>
            <strong>Restaurer un achat :</strong> roue crantée à côté du titre,
            puis « Restaurer un achat ». <strong>Aucune vibration :</strong>{" "}
            Réglages › Sons et vibrations › Retour haptique système.
          </p>
          <p>
            <strong>Confidentialité :</strong> Nocturne ne collecte, ne stocke
            et ne partage aucune donnée personnelle. Tes réglages restent sur
            ton appareil, les achats sont gérés par Apple, et Santé n&apos;est
            utilisé que si tu l&apos;actives, en écriture seule.
          </p>
        </section>
      </main>

      <footer>
        <p>
          Nocturne is a relaxation app, not a medical device. If anxiety or
          sleep problems weigh on you, please talk to a health professional.
        </p>
        <p>© 2026 Baptiste Lecocq</p>
      </footer>
    </div>
  );
}
