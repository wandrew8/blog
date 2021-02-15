import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import TopArticles from '../components/topArticles'
import useMediaQuery from '../hooks/mediaQuery'
import styled from 'styled-components'
import Headliner from '../components/headliner'
import { devices } from '../styles/devices'
import BlogCard from '../components/blogCard'

const IndexPage = ({ data }) => {
  const topArticles = data.allMarkdownRemark.edges.filter((item, i) => i < 5);
  let isPageWide = useMediaQuery(devices.tablet);
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
          <div className="popAuthors">
            <h2>Authors on the rise</h2>
          </div>
          <div className="popTags">
            <h2>Topics to Follow</h2>
          </div>
        </Container>
      </Layout>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1rem;
  max-width: 1200px;
  justify-content: center;
  padding: 0rem 0.5rem;
  margin: 3rem auto;
  @media ${devices.tablet} { 
    padding: 0rem 2rem;
  }
  @media ${devices.laptop} { 
    grid-template-columns: repeat(3, 1fr);
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
  }
  .popTags {
    max-width: 350px;
    min-width: 300px;
    width: auto;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgray;
  }
`;

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
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
            subtitle
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

