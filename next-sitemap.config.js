/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://tiste.io",
  output: "export",
  generateRobotsTxt: true,
  changefreq: "monthly",
  exclude: ["/projects/swunitch", "/icon.svg", "/manifest.webmanifest"],
};
