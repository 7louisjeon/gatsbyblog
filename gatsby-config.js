module.exports = {
  siteMetadata: {
    title: "CODE:RED's dev blog",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `JavaScript`,
        path: `${__dirname}/JavaScript`,
      }
    },
    "gatsby-plugin-mdx",
  ],
};