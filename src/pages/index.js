import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="Hi, I'm CODE:RED.">
      <p>And this is my personal study log website made with Gatsby. Gatsby is a framework that generated React and GraphQL setup for me to use.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://developers.redhat.com/sites/default/files/styles/share/public/red-hat-developer-program-2020-build-here-go-anywhere.png?itok=il5htjXQ"
      />
    </Layout>
  )
}
export default IndexPage