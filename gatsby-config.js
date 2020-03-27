module.exports = {
  siteMetadata: {
    title: `ZDitgit`,
    description: `A team website for Zeppelin Digit for IT, Digitalization & Innovation.`,
    siteUrl: `https://zdigit.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },

          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-PSJ7632",

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        // Defaults to null
        defaultDataLayer: { platform: "gatsby" },

        // // Specify optional GTM environment details.
        // gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
        // gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
        // dataLayerName: 'YOUR_DATA_LAYER_NAME',
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ZDigit Team`,
        short_name: `ZDigit`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#0066FF`,
        display: `minimal-ui`,
        icon: `src/assets/logo.png`,
      },
    },
    "gatsby-plugin-top-layout",
    "gatsby-plugin-material-ui",
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
