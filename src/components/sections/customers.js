import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Customers() {
  const staticQuery = graphql`
    {
      allFile(
        filter: { relativePath: { glob: "customers/*" } }
        sort: { fields: name }
      ) {
        edges {
          node {
            name
            childImageSharp {
              gatsbyImageData(
                width: 250
                layout: CONSTRAINED
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `;

  return (
    <StaticQuery
      query={`${staticQuery}`}
      render={(data) => <CustomersSection data={data} />}
    />
  );
}

function getCustomers(data, colorMode) {
  return data.allFile.edges
    .filter(({ node }) => node.name.endsWith(colorMode))
    .map(({ node }, i) => (
      <div key={i} className="column is-4-mobile is-2-tablet">
        <GatsbyImage
          image={node.childImageSharp.gatsbyImageData}
          alt={node.name}
        />
      </div>
    ));
}

function CustomersSection({ data }) {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns is-vcentered is-multiline is-mobile is-light-mode">
          {getCustomers(data, "light")}
        </div>

        <div className="columns is-vcentered is-multiline is-mobile is-dark-mode">
          {getCustomers(data, "dark")}
        </div>
      </div>
    </section>
  );
}
