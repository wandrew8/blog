import React from 'react'
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from '../components/layout'

const TagsPage = ({data}) => {
    const categories = data.categoryGroup.group
    return (
        <Layout>
            <div>
                <ul>
                {categories.map(tag => {
                    const tags = tag.nodes
                    const allTags = tags.map(node => (node.frontmatter.tags)).flat();
                    let unique = [...new Set(allTags)];
                    return (
                        <li key={tag.fieldValue}>
                            <h2>{tag.fieldValue}</h2>
                            { unique.map(single => {
                                return (
                                    <Link key={single} to={`/tags/${kebabCase(single)}/`}>
                                        {single}
                                    </Link>
                                )
                            })}
                        </li>
                        )
                })}
                </ul>
            </div>
        </Layout>
    )
}

export default TagsPage

export const pageQuery = graphql`
query {
    categoryGroup: allMarkdownRemark(limit: 2000) {
          group(field: frontmatter___category) {
              fieldValue
              totalCount
              nodes {
                  frontmatter {
                      path
                      title
                      tags
                      category
                    }
                }
            }
        }
    }
`