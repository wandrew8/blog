import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"
import AuthorAside from '../components/authorAside'
import { devices } from '../styles/devices'
import useMediaQuery from '../hooks/mediaQuery'
export default function Template({ data }) {
  const { markdownRemark: post } = data
  let isPageWide = useMediaQuery(devices.tablet);
  return (
    <PageContainer>
      <Helmet title={`${post.frontmatter.title}`} />
      <Container>
        {isPageWide && <AuthorAside mobile={isPageWide} authorBio={post.frontmatter.authorBio} author={post.frontmatter.author} authorImage={post.frontmatter.authorImage.childImageSharp.fluid}/> }
        <div className="blog-post">
          <h1>{post.frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </Container>
    </PageContainer>
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
  grid-gap: 2rem;
  position: relative;
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