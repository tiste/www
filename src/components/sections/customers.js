import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

export function CustomersSection() {
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
      render={(data) => <CustomersComponent data={data} />}
    />
  );
}

export function getCustomers(data, colorMode, filter = "") {
  return data.allFile.edges
    .filter(({ node }) => node.name.endsWith(colorMode))
    .filter(({ node }) =>
      node.name.toLowerCase().includes(filter.substr(0, 4).toLowerCase())
    )
    .map(({ node }, i) => (
      <div key={i} className="column is-4-mobile is-2-tablet">
        <Link to={`/missions/${node.name.split(".")[0]}`}>
          <GatsbyImage
            image={node.childImageSharp.gatsbyImageData}
            alt={node.name}
          />
        </Link>
      </div>
    ));
}

function CustomersComponent({ data }) {
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
