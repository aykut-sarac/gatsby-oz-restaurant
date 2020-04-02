import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Globals/Background"


const MenuPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Background
      img={data.img.childImageSharp.fluid}
      title="Menu"
      styleClass="menu-background"
    />
    <Background
      img={data.img2.childImageSharp.fluid}
      title=""
      styleClass="menu-background"
    />
    <Background
      img={data.img3.childImageSharp.fluid}
      title=""
      styleClass="menu-background"
    />

  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"houseburger.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  img2:file(relativePath:{eq:"newyork.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  img3:file(relativePath:{eq:"special.jpg"}){
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }

}
`



export default MenuPage

// about.jpg
// Photo by Robert Klank on Unsplash