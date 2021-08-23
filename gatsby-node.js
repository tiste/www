const path = require("path");
const slugify = require("slugify");
const { CV } = require("./content/cv");

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  // CV
  const createdCustomers = [];

  CV.forEach((mission, index) => {
    const customer = mission.customer.split(" (")[0];
    const slug = createdCustomers.includes(customer)
      ? `${customer.toLowerCase()}-${index}`
      : customer.toLowerCase();

    createPage({
      path: `/missions/${slugify(slug)}`,
      component: path.resolve(__dirname, "src/templates/mission.js"),
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

  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(__dirname, "src/templates/project.js"),
      context: {
        slug: node.frontmatter.slug,
      },
    });
  });
};
