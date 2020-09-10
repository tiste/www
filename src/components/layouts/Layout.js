import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import "../../stylesheets/main.scss";
import { Seo } from "../Seo";

export default (props) => {
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
      render={(data) => <Layout static={data} {...props} />}
    />
  );
};

function Layout(props) {
  const title = props.title
    ? `${props.title} - ${props.static.site.siteMetadata.title}`
    : props.static.site.siteMetadata.title;

  return (
    <>
      <Helmet htmlAttributes={{ lang: "fr" }}>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta
          name="description"
          content="Consultant informatique Lille. J'aide les personnes et équipes à définir et répondre à leurs besoins. J' y parviens en travaillant pour et avec ces personnes en mettant en place un environnement favorisant les échanges et l'excellence technique. Je considère réussir cette mission en suivant des indicateurs liés à la satisfaction client et la qualité logicielle."
        />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1, user-scalable=no, minimal-ui"
        />
      </Helmet>
      <Seo />
      <main className={props.cssClasses}>{props.children}</main>
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string,
  cssClasses: PropTypes.string,
};
