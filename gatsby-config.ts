import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Baptiste Lecocq, ingénieur logiciel indépendant à Lille",
    description:
      "Consultant informatique Lille. J'aide les personnes et équipes à définir et répondre à leurs besoins. J' y parviens en travaillant pour et avec ces personnes en mettant en place un environnement favorisant les échanges et l'excellence technique. Je considère réussir cette mission en suivant des indicateurs liés à la satisfaction client et la qualité logicielle.",
    siteUrl: "https://tiste.io",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Baptiste Lecocq, ingénieur logiciel indépendant à Lille",
        short_name: "Baptiste Lecocq",
        start_url: "/",
        background_color: "#FFCE00",
        theme_color: "#FFCE00",
        display: "minimal-ui",
        icon: "src/images/favicon.svg",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/projects`,
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    "gatsby-plugin-offline",
  ],
};

export default config;
