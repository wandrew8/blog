import React from 'react'
import { Link, graphql } from "gatsby"
import kebabCase from "lodash/kebabCase"
import Layout from '../components/layout'
import styled from "styled-components"
import placeholder from '../images/featured/recursion.jpg'
import Img from 'gatsby-image'
import { devices } from '../styles/devices';

const TagsPage = ({data}) => {
    const categories = data.categoryGroup.group
    const images = data.allImageSharp.edges;
    console.log(images)
    return (
        <Layout>
            <CategoryCard>
            {categories.map(tag => {
                const tags = tag.nodes
                const allTags = tags.map(node => (node.frontmatter.tags)).flat();
                let unique = [...new Set(allTags)];
                return (
                    <div className="category" key={tag.fieldValue}>
                        <div className="title">
                            <h2>{tag.fieldValue}</h2>
                        </div>
                        <ul>
                        { unique.map(single => {
                            let tagImage = images.filter(image => image.node.fluid.originalName === `${kebabCase(single).toLowerCase()}.jpg` )[0]?.node?.fluid || placeholder;
                            console.log(tagImage)
                            return (
                                <li key={single} className="tags">
                                    <Link key={single} to={`/tags/${kebabCase(single)}/`}>
                                        <div className="card">
                                            <div className="cardHeading">
                                                <h3>{single}</h3>
                                            </div>
                                            <Img className="image" fluid={tagImage} alt={single} />
                                        </div>
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                    )
            })}
            </CategoryCard>
        </Layout>
    )
}

export default TagsPage

const CategoryCard = styled.div`
margin: 0 auto;
max-width: 900px;
padding: 0rem 0.25rem;
a {
    text-decoration: none;
}
    h2, h3 {
        padding: 0;
        margin: 0;
    }
    .cardHeading {
        height: 50px;
        display: flex;
        align-items: center;
        color: gray;
    }
    .title {
        border-bottom: solid 1px gray;
        padding: 1rem 0rem;
        margin: 0.5rem 0rem;
    }
    ul {
        display: grid;
        grid-template-columns: 1fr 1fr;
        list-style-type: none;
        margin: 0;
        padding: 0;
        grid-gap: 0.5rem;
        justify-content: center;
        @media ${devices.mobileM} {
            grid-template-columns: 1fr 1fr;
        }
        @media ${devices.tablet} {
            grid-template-columns: repeat(4, 1fr);
        }
        @media ${devices.laptop} {
            grid-template-columns: repeat(5, 1fr);
        }
        .tags {
            margin: 0 auto;
        }
    }
    .tags {
        img {
            height: 135px;
            width: 135px;
            object-fit: cover;
            @media ${devices.mobileM} {
                height: 100px;
                width: 150px;
        }
        }
    }
    .card {
        border: solid 1px lightgray;
        text-align: center;
        padding: 0;
        margin: 0;
        height: 150px;
        width: 152px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    @media ${devices.tablet} {
        margin: 0rem auto;
        padding: 0rem 2rem;
    }
`;

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
        allImageSharp {
            edges {
                node {
                    fluid (maxWidth: 500) {
                        ...GatsbyImageSharpFluid
                        
                    }
                }
            }
        }
    }
`