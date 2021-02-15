import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import useMediaQuery from '../hooks/mediaQuery'
import styled from 'styled-components'
import Headliner from '../components/headliner'
import { devices } from '../styles/devices'
import BlogCard from '../components/blogCard'
import TopTags from '../components/topTags'

const IndexPage = ({ data }) => {
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
          <div>
            <div className="popAuthors">
              <h2>Authors on the rise</h2>
            </div>
            <TopTags tags={tags} />
          </div>
          : <>
              <div className="popAuthors">
                <h2>Authors on the rise</h2>
              </div>
              <TopTags tags={tags} />
            </>
            }
        </Container>
      </Layout>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
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
  }
  @media ${devices.laptop} { 
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
  }
  .otherArticles {
    padding-bottom: 0rem;
    border-bottom: 1px solid lightgray;
  }
  .popAuthors {
    max-width: 350px;
    min-width: 300px;
    width: auto;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgray;
    h2 {
      padding: 0;
      margin: 0;
    }
  }
`;

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
                fluid(maxWidth: 100) {
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

