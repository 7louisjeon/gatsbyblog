module.exports = {
  siteMetadata: {
    title: "CODE:RED's dev vlog",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `javascript`,
        path: `${__dirname}/javascript`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};