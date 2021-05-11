import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import "../../stylesheets/main.scss";
import { Seo } from "../Seo";

export default function Layout(props) {
  const staticQuery = graphql`
    query SiteQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={`${staticQuery}`}
      render={(data) => <LayoutComponent static={data} {...props} />}
    />
  );
}

function LayoutComponent(props) {
  const title = props.title
    ? `${props.title} - ${props.static.site.siteMetadata.title}`
    : props.static.site.siteMetadata.title;

  return (
    <>
      <Helmet htmlAttributes={{ lang: "fr", class: "has-navbar-fixed-top" }}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta
          name="description"
          content="Consultant informatique Lille. J'aide les personnes et équipes à définir et répondre à leurs besoins. J' y parviens en travaillant pour et avec ces personnes en mettant en place un environnement favorisant les échanges et l'excellence technique. Je considère réussir cette mission en suivant des indicateurs liés à la satisfaction client et la qualité logicielle."
        />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, minimal-ui"
        />
      </Helmet>
      <Seo />
      <main className={props.cssClasses}>{props.children}</main>
    </>
  );
}

LayoutComponent.propTypes = {
  title: PropTypes.string,
  cssClasses: PropTypes.string,
};
