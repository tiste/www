import type { Metadata } from "next";
import "./stylesheets/main.scss";
import Script from "next/script";
import React from "react";

const description =
  "Consultant informatique Lille. J'aide les personnes et équipes à définir et répondre à leurs besoins. J' y parviens en travaillant pour et avec ces personnes en mettant en place un environnement favorisant les échanges et l'excellence technique. Je considère réussir cette mission en suivant des indicateurs liés à la satisfaction client et la qualité logicielle.";
const title = "Baptiste Lecocq, ingénieur logiciel indépendant à Lille";

export const metadata: Metadata = {
  metadataBase: new URL("https://tiste.io"),
  title,
  description,
  openGraph: {
    description,
    title,
    type: "website",
  },
  twitter: {
    site: "@tiste",
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Script
          id="jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@type": "WebSite",
              headline:
                "Baptiste Lecocq, ingénieur logiciel indépendant à Lille",
              sameAs: [
                "https://twitter.com/tiste",
                "https://www.linkedin.com/in/baptistelecocq",
                "https://github.com/tiste",
                "https://keybase.io/tiste",
              ],
              url: "https://tiste.io/",
              publisher: {
                "@type": "Organization",
                logo: {
                  "@type": "ImageObject",
                  url: "https://tiste.io/favicon.svg",
                },
              },
              name: "Baptiste Lecocq",
              "@context": "https://schema.org",
            }),
          }}
        />

        <Script
          defer
          data-domain="tiste.io"
          src="https://plausible.io/js/script.js"
        ></Script>

        <main>{children}</main>
      </body>
    </html>
  );
}
