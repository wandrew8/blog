import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import kebabCase from 'lodash/kebabCase'

const longBlogCard = ({ post }) => {
    const featuredImage = post.frontmatter.featuredImage.childImageSharp.fluid
    const { title, path, subtitle, date } = post.frontmatter;


    return (
        <Card>
            <h3 className="date">{date}</h3>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <Img className="blogImage" fluid={featuredImage} alt={title} />
            <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
            />
            <Link to={path}>Read More</Link>
        </Card>
    )
}

export default longBlogCard;

const Card = styled.div`
    max-height: 1000px;
    overflow: hidden;
    border-bottom: solid lightgray 1px;
    padding-bottom: 0.5rem;
    .date {
        color: gray;
        font-size: 1rem;
        padding: 0.5rem 0rem;
        border-bottom: solid lightgray 1px;
    }
`;
