import { GatsbyNode } from "gatsby";
import { CV } from "./src/components/CV";
import path from "path";
import slugify from "slugify";

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;

  // CV
  const createdCustomers: string[] = [];

  CV.forEach((mission, index) => {
    const customer = mission.customer.split(" (")[0];
    const slug = createdCustomers.includes(customer)
      ? `${customer.toLowerCase()}-${index}`
      : customer.toLowerCase();

    createPage({
      path: `/missions/${slugify(slug)}`,
      component: path.resolve(__dirname, "src/templates/mission.tsx"),
      context: { ...mission },
    });

    createdCustomers.push(customer);
  });

  // Projects
  const projects = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "project" } } }) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  // @ts-ignore
  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(__dirname, "src/templates/project.tsx"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
