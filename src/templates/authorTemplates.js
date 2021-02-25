import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import AuthorAside from '../components/authorAside'
import { devices } from '../styles/devices'
import useMediaQuery from '../hooks/mediaQuery'
import Layout from '../components/layout'
import Img from "gatsby-image"

export default function Template({ data }) {
  console.log(data)
  return (
    <Layout>
        <h1>Authors</h1>
    </Layout>
  )
}

export const authorQuery = graphql`
query ($author: String) {
    allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {author: {in: [$author]}}}) {
      edges {
        node {
            frontmatter {
                author
                authorBio
                date(formatString: "MMM DD")
                featuredImage {
                  childImageSharp {
                    fluid(maxWidth: 500) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                path
                subtitle
                tags
                title
                authorImage {
                  childImageSharp {
                    fluid(maxWidth: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
        }
      }
    }
  }
`

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0rem 2rem;
  position: relative;
  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
  }
  h2 {
    margin: 0.5rem 0rem;
    font-size: 1.1rem;
    color: gray;
    margin-bottom: 18px;
  }
  .blogImage {
    max-width: 664px;
    max-height: 300px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 2px;
    @media ${devices.tablet} { 
    max-height: 400px;
  }
  }
  @media ${devices.tablet} { 
    grid-template-columns: 200px 4fr;
  }
`

const MobileContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0rem 2rem;
  position: relative;
  h1 {
    font-size: 2rem;
    margin: 0;
    line-height: 2.5rem;
  }
  h2 {
    margin: 0.5rem 0rem;
    font-size: 1.1rem;
    color: gray;
    margin-bottom: 18px;
  }
  .blogImage {
    max-width: 664px;
    max-height: 300px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 2px;
    @media ${devices.tablet} { 
    max-height: 400px;
  }
  }
  @media ${devices.tablet} { 
    grid-template-columns: 200px 4fr;
  }
`
const PageContainer = styled.div`
  margin: 3rem 1rem;
  @media ${devices.tablet} { 
    margin: 6rem 4rem;
  }
  @media ${devices.laptop} { 
    margin: 6rem;
  }
`;