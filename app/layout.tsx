import type { Metadata } from "next";
import "./stylesheets/main.scss";
import Script from "next/script";
import React from "react";
import {
  siteDescription,
  siteName,
  siteTitle,
  siteUrl,
} from "@/app/services/metadata";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: siteName,
      headline: siteTitle,
      inLanguage: "fr-FR",
      publisher: { "@id": `${siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: siteName,
      url: `${siteUrl}/`,
      image: `${siteUrl}/images/og.jpg`,
      jobTitle: "Ingénieur logiciel indépendant",
      description: siteDescription,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Lille",
        addressCountry: "FR",
      },
      knowsAbout: [
        "JavaScript",
        "TypeScript",
        "React",
        "React Native",
        "Node.js",
        "Agilité",
        "Software craftsmanship",
      ],
      sameAs: [
        "https://twitter.com/tiste",
        "https://www.linkedin.com/in/baptistelecocq",
        "https://github.com/tiste",
        "https://keybase.io/tiste",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
