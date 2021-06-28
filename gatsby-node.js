const path = require("path");
const slugify = require("slugify");
const { CV } = require("./content/cv");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

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
};
