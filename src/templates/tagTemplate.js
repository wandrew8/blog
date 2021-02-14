import React from "react"
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'

const TagTemplate = ({ data }) => {
    const blogPosts = data.allMarkdownRemark.edges
    const { totalCount } = data.allMarkdownRemark;
    console.log(blogPosts)
    return (
        <Layout>
            <div>
                <ul>
                {blogPosts.map(({ node }) => {
                    const slug = node.frontmatter.path
                    const { title } = node.frontmatter
                    return (
                    <li key={slug}>
                        <Link to={slug}>{title}</Link>
                    </li>
                    )
                })}
                </ul>
                <Link to="/tags">View all tags</Link>
            </div>
        </Layout>
    )
}

export default TagTemplate;

export const pageQuery = graphql`
query ($tag: String) {
    allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {tags: {in: [$tag]}}}) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            author
            authorBio
            path
            tags
          }
        }
      }
    }
  }
`