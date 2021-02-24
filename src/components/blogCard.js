import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { truncate } from 'lodash'
import Img from "gatsby-image"

const BlogCard = ({ post }) => {
    const { excerpt } = post
    const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid;
    const authorImage = post.frontmatter.authorImage.childImageSharp.fluid;
    const { path, date, title, author, subtitle } = post.frontmatter
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
                        <p>{truncate(subtitle, {
                            'length': 35,
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
    max-width: 550px;
    min-width: 300px;
    width: auto;
    margin-bottom: 0.5rem;
    .flexbox {
        display: grid;
        grid-template-columns: 1fr 89px;
        grid-gap: 1rem;
        .image {
            height: 89px;
            width: 89px;
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
        font-size: 12px;
        line-height: 18px;
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
