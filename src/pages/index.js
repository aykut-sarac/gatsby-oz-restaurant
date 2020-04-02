import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Globals/Background"
import Info from "../components/Home/Info"
import Menu from "../components/Home/Menu"
import Contact from "../components/Home/Contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Background
      img={data.img.childImageSharp.fluid}
      title="OZ"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <Contact />
  </Layout>
)

export const query = graphql`
{
  img:file(relativePath:{eq:"steak.jpg"}){
    
    childImageSharp{
      fluid{
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  menu:allContentfulFoodItem{
    edges{
      node{
        id
        title
        description{
          json
        }
        price
        category
        image{
          fixed(width:50,height:50){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`



export default IndexPage

// steak.jpg from
// Photo by Thomas Q on Unsplash