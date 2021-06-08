import React from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import "../../stylesheets/main.scss";
import { Seo } from "../Seo";

export function Layout(props) {
  return (
    <>
      <Seo title={props.title} />
      <Helmet htmlAttributes={{ class: "has-navbar-fixed-top" }}>
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
      </Helmet>
      <main className={props.cssClasses}>{props.children}</main>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  cssClasses: PropTypes.string,
};
