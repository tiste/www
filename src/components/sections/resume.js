import React from "react";
import { graphql, Link, StaticQuery } from "gatsby";

export function ResumeSection(props) {
  const staticQuery = graphql`
    query {
      markdownRemark(frontmatter: { slug: { eq: "cv" } }) {
        html
      }
    }
  `;

  return (
    <StaticQuery
      query={`${staticQuery}`}
      render={(data) => <ResumeComponent data={data} {...props} />}
    />
  );
}

function ResumeComponent({ data, crop }) {
  return (
    <section className="section">
      <div className="container content">
        <h2>
          Mon parcours <strong>professionnel</strong>
        </h2>

        <div
          className={"resume " + (crop ? "is-cropped" : "")}
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </div>
      {crop && (
        <div className="has-text-centered">
          <Link className="button is-primary is-medium" to="/cv">
            Voir les autres missions
          </Link>
        </div>
      )}
    </section>
  );
}
