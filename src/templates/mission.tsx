import * as React from "react";
import { Layout } from "../components/layouts/Layout";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { graphql, HeadProps, PageProps } from "gatsby";
import { getCustomers } from "../components/sections/CustomersSection";
import { Seo } from "../components/Seo";
import { CVItem } from "../components/CV";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";

export default function MissionPage({
  pageContext,
  data,
}: PageProps<MissionQuery, CVItem>) {
  return (
    <Layout>
      <Nav />
      <section className="section mt-6">
        <div className="container content">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <div className="is-light-mode">
                {getCustomers(data, "light", pageContext.customer)}
              </div>

              <div className="is-dark-mode">
                {getCustomers(data, "dark", pageContext.customer)}
              </div>

              <h2 className="title">{pageContext.customer}</h2>
              <p className="is-4 subtitle">{pageContext.title}</p>
              <p className="is-5 subtitle">{pageContext.date}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container content">
          <div className="columns">
            <div className="column is-8 is-offset-2">
              <div
                className="is-size-3"
                dangerouslySetInnerHTML={{
                  __html: pageContext.description
                    .replace("\n", "")
                    .replace(/\n/g, "<br />"),
                }}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

export function Head(props: HeadProps<MissionQuery, CVItem>) {
  return (
    <Seo title={`${props.pageContext.customer} / ${props.pageContext.title}`} />
  );
}

export interface MissionQuery {
  allFile: {
    edges: {
      node: FileNode & { name: string };
    }[];
  };
}

export const query = graphql`
  query Mission {
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
`;
