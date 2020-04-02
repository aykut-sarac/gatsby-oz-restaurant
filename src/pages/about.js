import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Globals/Background"
import Info from "../components/Home/Info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Background
      img={data.img.childImageSharp.fluid}
      title="About OZ"
      styleClass="about-background"

    />
    <Info></Info>
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"about.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`



export default AboutPage

// about.jpg
// Photo by Robert Klank on Unsplash