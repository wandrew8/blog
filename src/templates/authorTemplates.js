import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import AuthorAside from '../components/authorAside'
import { devices } from '../styles/devices'
import useMediaQuery from '../hooks/mediaQuery'
import Layout from '../components/layout'
import Img from "gatsby-image"
import LongBlogCard from '../components/longBlogCard'

export default function Template({ data }) {
  let isPageWide = useMediaQuery(devices.tablet);
  const authorInfo = data.allMarkdownRemark.edges[0].node.frontmatter;
  const { authorBio, author } = authorInfo;
  const authorImage = authorInfo.authorImage.childImageSharp.fluid;
  const blogPosts = data.allMarkdownRemark.edges;
  return (
    <Layout>
        <h1>Authors</h1>
        { !isPageWide ? 
        <MobileContainer>  
          <div className="blog-post">
            <AuthorAside mobile={isPageWide} authorBio={authorBio} author={author} authorImage={authorImage}/> 
            {blogPosts.map(post => {
                return (
                    <LongBlogCard post={post.node} key={post.node.frontmatter.title} />
                )
            })}
          </div>
        </MobileContainer> :
        <Container>
          <AuthorAside mobile={isPageWide} authorBio={authorBio} author={author} authorImage={authorImage}/> 
          <div className="blog-post"> 
            {blogPosts.map(post => {
                return (
                    <LongBlogCard post={post.node} key={post.node.frontmatter.title} />
                )
            })}
          </div>
        </Container> }
    </Layout>
  )
}

export const authorQuery = graphql`
query ($author: String) {
    allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {author: {in: [$author]}}}) {
      edges {
        node {
            html
            excerpt(pruneLength: 1000)
            frontmatter {
                author
                authorBio
                date(formatString: "MMMM DD, YYYY")
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