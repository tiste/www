import React from "react";
import { graphql, StaticQuery } from "gatsby";

export default () => {
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
      render={(data) => <ResumeSection data={data} />}
    />
  );
};

function ResumeSection({ data }) {
  return (
    <section className="section">
      <div className="container content">
        <h2>
          Mon parcours <strong>professionnel</strong>
        </h2>

        <div className="columns is-8 is-variable">
          <div
            className="resume"
            dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
          ></div>
        </div>
      </div>
    </section>
  );
}
