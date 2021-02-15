import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { truncate } from 'lodash'
import Img from "gatsby-image"
import { devices } from '../styles/devices'

const BlogCard = ({ post }) => {
    const { excerpt } = post
    const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid;
    const authorImage = post.frontmatter.authorImage.childImageSharp.fluid;
    const { path, date, title, author } = post.frontmatter
    return (
        <Card>
            <Link to={path}>
                <div className="flexbox">
                    <div>
                        <div className="author">
                            <Img fluid={authorImage} alt={author} />
                            <p>{author} · {date}</p>
                        </div>
                        <h1>{title}</h1>
                        <p>{truncate(excerpt, {
                            'length': 70,
                            'seperator': " "}
                        )}</p>
                    </div>
                    <Img className="image" fluid={featuredImage} alt={title} />
                </div>
            </Link>
        </Card>
    )
}

export default BlogCard

const Card = styled.div`
    border-radius: 10px;
    width: 300px;
    margin: 0 auto;
    @media ${devices.mobileL} { 
        width: 350px;
    }
    @media ${devices.tablet} {
        width: 300px;
    }
    @media ${devices.laptop} { 
        width: 400px;
    }
    .flexbox {
        display: grid;
        grid-template-columns: 1fr 100px;
        grid-gap: 1rem;
        .image {
            height: 100px;
            width: 100px;
        }
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
        font-size: 10px;
        line-height: 10px;
    }
    h2 {
        font-size: 11px;
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
        margin-bottom: 5px;
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
