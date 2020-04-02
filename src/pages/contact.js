import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Globals/Background"


const ContactPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Background
      img={data.img.childImageSharp.fluid}
      title="Contact"
      styleClass="menu-background"

    />

  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"contact.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}
`



export default ContactPage


// Photo by Benjamin Sow on Unsplash