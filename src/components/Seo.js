import React from "react";
import { Helmet } from "react-helmet";

export function Seo() {
  return (
    <Helmet>
      <meta
        property="og:title"
        content="Baptiste Lecocq, ingénieur logiciel indépendant à Lille"
      />
      <meta property="og:locale" content="fr" />
      <meta property="og:url" content="https://tiste.io/" />
      <meta
        property="og:site_name"
        content="Baptiste Lecocq, ingénieur logiciel indépendant à Lille"
      />
      <meta name="twitter:card" content="summary" />
      <meta
        property="twitter:title"
        content="Baptiste Lecocq, ingénieur logiciel indépendant à Lille"
      />
      <meta name="twitter:site" content="@tiste" />

      <script type="application/ld+json">
        {JSON.stringify({
          "@type": "WebSite",
          headline: "Baptiste Lecocq, ingénieur logiciel indépendant à Lille",
          sameAs: [
            "https://twitter.com/tiste",
            "https://www.linkedin.com/in/baptistelecocq",
            "https://plus.google.com/+BaptisteLecocq",
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
        })}
      </script>
    </Helmet>
  );
}
