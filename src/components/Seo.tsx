import React from "react";
import { graphql, useStaticQuery } from "gatsby";

type Metadata = { name?: string; property?: string; content: string };

export function Seo({
  title,
  description,
  meta = [],
}: {
  title?: string;
  description?: string;
  meta?: Metadata[];
}) {
  const data = useStaticQuery(graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  const metaTitle = title || data.site.siteMetadata.title;
  const metaDescription = description || data.site.siteMetadata.description;
  const metaMeta: Metadata[] = [
    ...[
      {
        name: "charset",
        content: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, minimum-scale=1, minimal-ui",
      },
      {
        name: "description",
        content: metaDescription,
      },
      {
        property: "og:title",
        content: title,
      },
      {
        property: "og:description",
        content: metaDescription,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:site",
        content: "@tiste",
      },
      {
        name: "twitter:card",
        content: "summary",
      },
      {
        name: "twitter:title",
        content: title,
      },
      {
        name: "twitter:description",
        content: metaDescription,
      },
    ],
    ...meta,
  ];

  return (
    <>
      <html lang="fr" />
      <title>{metaTitle}</title>
      {metaMeta.map((m) => (
        <meta
          key={m.name || m.property}
          id={m.name || m.property}
          name={m.name}
          property={m.property}
          content={m.content}
        />
      ))}

      <script
        defer
        data-domain="tiste.io"
        src="https://plausible.io/js/script.js"
      ></script>

      <script type="application/ld+json">
        {JSON.stringify({
          "@type": "WebSite",
          headline: "Baptiste Lecocq, ingénieur logiciel indépendant à Lille",
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
        })}
      </script>
    </>
  );
}
