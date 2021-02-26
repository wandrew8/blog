import React from "react"
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
  const { title, authorBio, subtitle, author, date } = post.frontmatter;
  const authorImage = post.frontmatter.authorImage.childImageSharp.fluid;
  const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid
  return (
    <Layout>
      <PageContainer>
        { !isPageWide ? <MobileContainer>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          <div className="blog-post">
          <AuthorAside mobile={isPageWide} authorBio={authorBio} author={author} authorImage={authorImage}/> 
            <Img className="blogImage" fluid={featuredImage} alt={title} />
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </MobileContainer> :
        <Container>
          <AuthorAside mobile={isPageWide} authorBio={authorBio} author={author} authorImage={authorImage}/> 
          <div className="blog-post">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <Img className="blogImage" fluid={featuredImage} alt={title} />
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </div>
        </Container> }
      </PageContainer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMM DD, YYYY")
        path
        title
        author
        authorBio
        subtitle
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