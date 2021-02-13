import React from 'react'
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"

const TagsPage = ({data}) => {
    const siteTitle = data.site.siteMetadata.title
    const tags = data.tagsGroup.group

    return (
        <div>
            <ul>
            {tags.map(tag => (
                <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    {tag.fieldValue} ({tag.totalCount})
                </Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`