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
    <Background
      img={data.img2.childImageSharp.fluid}
      title=""
      styleClass="default-background"
    />

    <Menu items={data.menu} />
    <Background
      img={data.img3.childImageSharp.fluid}
      title=""
      styleClass="default-background"
    />
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
          fixed(width:150,height:150){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
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



export default IndexPage

// steak.jpg from
// Photo by Thomas Q on Unsplash