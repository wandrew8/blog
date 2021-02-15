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
          <div>
            {otherArticles.map((article, i) => {
              return <BlogCard key={i} post={article.node} />
            })}
          </div>
          <div>
            <h2>Latest From Following</h2>
          </div>
          <div>
            <h2>Topics to Follow</h2>
          </div>
        </Container>
      </Layout>
    )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1rem;
  max-width: 1000px;
  margin: 0 auto;
  @media ${devices.tablet} { 
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${devices.laptop} { 
    grid-template-columns: repeat(3, 1fr);
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

