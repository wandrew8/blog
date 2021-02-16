import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { truncate } from 'lodash'
import { devices } from '../styles/devices'

const Headliner = ({ data }) => {
    const { excerpt } = data
    const featuredImage = data.frontmatter.featuredImage.childImageSharp.fluid;
    const authorImage = data.frontmatter.authorImage.childImageSharp.fluid;
    const { path, date, title, author, subtitle } = data.frontmatter    
    return (
        <Container>
            <Link to={path}>
                <h2 className="title">New Stories</h2>
                <Img className="image" fluid={featuredImage} alt={title} />
                <div className="author">
                    <Img fluid={authorImage} alt={author} />
                    <p>{author} · {date}</p>
                </div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <p>{truncate(excerpt, {
                    'length': 100,
                    'seperator': " "}
                )}</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    max-width: 550px;
    min-width: 300px;
    width: auto;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgray;
    .title {
        font-size: 24px;
        color: black;
    }
    .image {
        height: 270px;
        width: 100%;
        margin-bottom: 1rem;
    }
    a {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    h1 {
        font-size: 16px;
        line-height: 20px;
        margin: 0rem;
        padding: 0;
    }
    p {
        margin: 8px 0px;
        padding: 0;
        font-size: 12px;
        line-height: 18px;
    }
    h2 {
        font-size: 13px;
        color: gray;
        margin: 0;
        padding: 0;
    }
    .author {
        display: grid;
        grid-template-columns: 20px 1fr;
        grid-gap: 0.5rem;
        align-items: center;
        margin: 0;
        margin-bottom: 10px;
        img {
            height: 20px;
            width: 20px; 
            border-radius: 50%;
            object-fit: cover;
        }
        p {
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            padding: 0;
            margin: 0;
        }
    }
`;

export default Headliner;
