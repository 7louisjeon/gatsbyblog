import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://developers.redhat.com/sites/default/files/styles/share/public/red-hat-developer-program-2020-build-here-go-anywhere.png?itok=il5htjXQ"
      />
    </Layout>
  )
}
export default IndexPage