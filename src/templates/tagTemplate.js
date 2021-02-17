import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'
import BlogCard from '../components/blogCard'
import styled from 'styled-components'

const TagTemplate = ({ data }) => {
    console.log(data)
    const blogPosts = data.allMarkdownRemark.edges
    const { totalCount } = data.allMarkdownRemark;
    console.log(blogPosts)
    return (
        <Layout>
            <div>
                <Grid>
                {blogPosts.map((post) => {
                    const slug = post.node.frontmatter.path
                    const { title } = post.node.frontmatter
                    return (
                        <BlogCard key={slug} post={post.node}/>
                    )
                })}
                </Grid>
                <Link to="/tags">View all tags</Link>
            </div>
        </Layout>
    )
}

export default TagTemplate;

const Grid = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fill, minmax(300px, 450px));
    justify-content: center;
    padding: 3rem 2rem;

`;

export const pageQuery = graphql`
query ($tag: String) {
    allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {tags: {in: [$tag]}}}) {
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