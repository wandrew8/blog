import React from "react"
import { graphql } from "gatsby"
import BlogCard from '../components/blogCard'
import { devices } from '../styles/devices'
import styled from 'styled-components'
import Layout from '../components/layout'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Layout>
      <Grid>
        {posts
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({ node: post }) => {
            return (
              <BlogCard key={post.id} post={post}/>
            )
          })}
      </Grid>
    </Layout>
  )
}
export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMM DD")
            path
            author
            authorImage {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500) {
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

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 0rem;
    margin: 3rem 1rem;
    justify-content: center;
    max-width: 1000px;
    @media ${devices.mobileL} { 
      margin: 2rem;
    }
    @media ${devices.tablet} { 
      margin: 4rem;
      grid-template-columns: repeat(2, 1fr);
    }
    @media ${devices.laptop} { 
        margin: 4rem auto;
    }
`;