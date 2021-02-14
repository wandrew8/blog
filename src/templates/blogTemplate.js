import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"
import AuthorAside from '../components/authorAside'
import { devices } from '../styles/devices'
import useMediaQuery from '../hooks/mediaQuery'
import Layout from '../components/layout'
import Img from "gatsby-image"


export default function Template({ data }) {
  const { markdownRemark: post } = data
  let isPageWide = useMediaQuery(devices.tablet);
  const { title, authorBio, author } = post.frontmatter;
  const authorImage = post.frontmatter.authorImage.childImageSharp.fluid;
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <PageContainer>
        <Helmet title={`${title}`} />
        <Container>
          <AuthorAside mobile={isPageWide} authorBio={authorBio} author={author} authorImage={authorImage}/> 
          <div className="blog-post">
            <h1>{title}</h1>
            <Img className="image" fluid={featuredImage} alt={title} />
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </Container>
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        author
        authorBio
        authorImage {
          childImageSharp {
            fluid(maxWidth: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const Container = styled.div`
  max-width: 900px;
  margin: 2rem auto;
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0rem 2rem;
  position: relative;
  h1 {
    font-size: 2rem;
  }
  .image {
    max-width: 664px;
    max-height: 400px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 2px;
  }
  @media ${devices.tablet} { 
    grid-template-columns: 200px 4fr;
  }
`
const PageContainer = styled.div`
  margin: 2rem;
  @media ${devices.mobileL} { 
    margin: 4rem;
  }
  @media ${devices.tablet} { 
    margin: 6rem 4rem;
  }
  @media ${devices.laptop} { 
    margin: 6rem;
  }
`;