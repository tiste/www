module.exports = {
  siteMetadata: {
    title: `Baptiste Lecocq, ingénieur logiciel indépendant à Lille`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-42477577-1",
        anonymize: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Baptiste Lecocq, ingénieur logiciel indépendant à Lille`,
        short_name: `Baptiste Lecocq`,
        start_url: `/`,
        background_color: `#FFCE00`,
        theme_color: `#FFCE00`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-transformer-remark`,
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
