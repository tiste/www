import React from "react";
import { Layout } from "../components/layouts/Layout";
import { Footer } from "../components/layouts/Footer";
import { Nav } from "../components/layouts/Nav";
import { graphql } from "gatsby";
import { GatsbyImage, getSrc } from "gatsby-plugin-image";

export default function ProjectPage({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <Nav />
      <section
        className="hero"
        itemScope={true}
        itemType="http://schema.org/SoftwareApplication"
      >
        <div
          className="hero-body"
          itemProp="applicationCategory"
          content="MobileApplication"
        >
          <div
            className="container content"
            itemProp="operatingSystem"
            content="iOS, ANDROID"
          >
            <div className="has-text-centered">
              <h2 className="title" itemProp="name">
                {frontmatter.title}
              </h2>

              <div
                itemProp="image"
                content={getSrc(frontmatter.featuredImage)}
              />

              <div>
                <a
                  href={frontmatter.ios}
                  className="button is-primary is-rounded is-small mt-3 mr-3"
                  itemProp="url"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Téléchargez pour iPhone</span>
                  <span className="icon" role="img" aria-label="phone">
                    📱
                  </span>
                </a>

                <a
                  href={frontmatter.android}
                  className="button is-primary is-rounded is-small mt-3 mr-3"
                  itemProp="url"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Téléchargez pour Android</span>
                  <span className="icon" role="img" aria-label="phone">
                    📱
                  </span>
                </a>

                <a
                  href={frontmatter.web}
                  className="button is-primary is-rounded is-small mt-3"
                  itemProp="url"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>Voir sur le web</span>
                  <span className="icon" role="img" aria-label="computer">
                    💻
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container content">
          <div className="columns is-flex-direction-row-reverse">
            <div
              className="column mt-6"
              dangerouslySetInnerHTML={{ __html: html }}
            />

            <div className="column has-text-centered">
              <GatsbyImage
                image={
                  frontmatter.featuredImage.childImageSharp.gatsbyImageData
                }
                alt={frontmatter.title}
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  );
}

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        ios
        android
        web
        featuredImage {
          childImageSharp {
            gatsbyImageData(
              width: 400
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
        }
      }
    }
  }
`;
