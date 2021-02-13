import React from "react"
import { graphql } from "gatsby"
import BlogCard from '../components/blogCard'
import { devices } from '../styles/devices'
import styled from 'styled-components'

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <Grid>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <BlogCard key={post.id} post={post}/>
          )
        })}
    </Grid>
  )
}
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMM DD, YYYY")
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
    grid-gap: 2rem;
    margin: 2rem;
    justify-content: center;
    @media ${devices.laptop} { 
    grid-template-columns: repeat(2, 1fr);
  }
`;