import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MissionQuery } from "../../templates/mission";

export function CustomersSection() {
  const data = useStaticQuery(graphql`
    {
      allFile(
        filter: { relativePath: { glob: "customers/*" } }
        sort: { name: ASC }
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
  `);

  return (
    <section className="section customers-section no-print">
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

export function getCustomers(
  data: MissionQuery,
  colorMode: string,
  filter = ""
) {
  return data.allFile.edges
    .filter(({ node }) => node.name.endsWith(colorMode))
    .filter(({ node }) =>
      node.name.toLowerCase().includes(filter.substr(0, 4).toLowerCase())
    )
    .map(({ node }, i: number) => (
      <div key={i} className="column is-4-mobile is-2-tablet">
        <Link to={`/missions/${node.name.split(".")[0]}`}>
          <GatsbyImage
            image={node.childImageSharp!.gatsbyImageData}
            alt={node.name}
          />
        </Link>
      </div>
    ));
}
