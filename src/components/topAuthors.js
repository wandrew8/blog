import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import kebabCase from "lodash/kebabCase"

const TopAuthors = (props) => {
    const authors = props.data.group;
    const { limit } = props;
    return (
        <Container>
            <h2>Top Authors</h2>
            <div className="grid">
                { authors.filter((author, i) => i < limit).map(author => {
                    const name = author.fieldValue;
                    const image = author.nodes[0].frontmatter.authorImage.childImageSharp.fluid;
                    const { authorBio } = author.nodes[0].frontmatter;
                    return (
                        <Link to={`/author/${kebabCase(name)}`}>
                            <div>
                                <Img className="image" fluid={image} alt={name} />
                                <p>{name}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </Container>
    )
}


const Container = styled.div`
    max-width: 550px;
    min-width: 300px;
    width: auto;
    border-bottom: 1px solid lightgray;
    padding-bottom: 0.5rem;
    a {
        text-decoration: none;
        color: black;
    }
    h2 {
        padding: 0;
        margin: 0;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, 62px);
        grid-gap: 1rem;
        margin: 0.5rem 0rem;
        .image {
            height: 62px;
            width: 62px;
            border-radius: 50%;
            object-fit: cover;
        }
        p {
            font-size: 10px;
            text-align: center;
            margin-bottom: 0;
            padding: 0;
        }
    }
    
    `;

export default TopAuthors;
  
