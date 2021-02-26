import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import useMediaQuery from '../hooks/mediaQuery'
import styled from 'styled-components'
import Headliner from '../components/headliner'
import { devices } from '../styles/devices'
import BlogCard from '../components/blogCard'
import TopTags from '../components/topTags'
import TopAuthors from '../components/topAuthors'
import NewsFeed from '../components/newsFeed'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  const topArticles = data.tagsGroup.edges.filter((item, i) => i < 5);
  const tags = data.tagsGroup.group;
  let isPageWide = useMediaQuery(devices.laptop);
  const headliner = topArticles[0].node;
  const otherArticles = topArticles.slice(1);
  return (
      <Layout>
        <Container>
          <Headliner data={headliner}/>
          <div className="otherArticles">
            {otherArticles.map((article, i) => {
              return <BlogCard key={i} post={article.node} />
            })}
          </div>
          { isPageWide ? 
          <div className="desktop">
            <TopAuthors limit={4} data={data.authorGroup}/>
            <TopTags tags={tags} limit={3}/>
          </div>
          : <>
              <TopAuthors limit={8} data={data.authorGroup}/>
              <TopTags tags={tags} limit={4}/>
            </>
            }
        </Container>
        <NewsFeed posts={posts}/>
      </Layout>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 550px));
  grid-gap: 1.5rem;
  max-width: 1200px;
  justify-content: center;
  padding: 0rem 0.5rem;
  margin: 3rem auto;
  @media ${devices.mobileL} { 
    padding: 0rem 1rem;
  }
  @media ${devices.tablet} { 
    padding: 0rem 2rem;
    grid-template-columns: repeat(auto-fill, minmax(325px, 330px));

  }
  @media ${devices.laptop} { 
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  .otherArticles {
    padding-bottom: 0rem;
    border-bottom: 1px solid lightgray;
  }
  .desktop {
    border-left: solid 1px lightgray;
    padding-left: 1rem;
  }
  
`;

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 500)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            author
            authorBio
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
  
    authorGroup: allMarkdownRemark(limit: 2000, sort: {fields: frontmatter___author, order: ASC}) {
      group(field: frontmatter___author, limit: 5) {
          totalCount
          fieldValue
          nodes {
              frontmatter {
                  authorBio
                  authorImage {
                      childImageSharp {
                          fluid {
                              ...GatsbyImageSharpFluid
                          }
                      }
                  }
              }
          }
      }
  }
    tagsGroup: allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      edges {
        node {
          frontmatter {
            author
            authorBio
            date(formatString: "MMM DD")
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 600) {
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

