import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"
import styled from "styled-components"
import AuthorAside from '../components/authorAside'

export default function Template({ data }) {
  const { markdownRemark: post } = data
  console.log(post.frontmatter.authorImage)
  return (
    <PageContainer>
      <Helmet title={`${post.frontmatter.title}`} />
      <Container>
        <AuthorAside authorBio={post.frontmatter.authorBio} author={post.frontmatter.author} authorImage={post.frontmatter.authorImage.childImageSharp.fluid}/>
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
  grid-template-columns: 200px 4fr;
  grid-gap: 2rem;
  position: relative;
`
const PageContainer = styled.div`
  margin: 6rem;
`;