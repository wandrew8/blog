import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { devices } from '../styles/devices'

const LongBlogCard = (props) => {
    const featuredImage = props.post.frontmatter.featuredImage.childImageSharp.fluid
    const authorImage = props.post.frontmatter.authorImage.childImageSharp.fluid
    const { title, path, subtitle, date, author, authorBio } = props.post.frontmatter;
    return (
        <>
        {props.showAuthor ? 
            <Container>
                <div className="authorInfo">
                <h3 className="title">Author</h3>
                <div className="info">
                    <Img className="authorImage" fluid={authorImage} alt={author}/>
                    <div>
                        <p className="content">ABOUT</p>
                        <h3>{author}</h3>
                    </div>
                </div>
                    <p className="content">{authorBio}</p>
                </div>
                <Card>
                    <h3 className="date">{date}</h3>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                    <Img className="blogImage" fluid={featuredImage} alt={title} />
                    <p>{props.post.excerpt}</p>
                    <Link to={path}>Read More</Link>
                </Card>
            </Container>
            :
            <Card>
                <h3 className="date">{date}</h3>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <Img className="blogImage" fluid={featuredImage} alt={title} />
                <p>{props.post.excerpt}</p>
                <Link to={path}>Read More</Link>
            </Card>
        }
        </>
    )
}

export default LongBlogCard;
const Container = styled.div`
    display: grid;
    max-width: 1200px;
    grid-template-columns: 300px 1fr;
    grid-gap: 2rem;
    margin: 0 auto;
    }
    @media ${devices.laptop} { 
        grid-gap: 2rem;
    }
    .authorInfo {
        .info {
            display: flex;
            align-items: center;
            margin-bottom: 0.25rem;
        }
        h3 {
            font-size: 1.2rem;
            padding: 0;
            margin: 0;
        }
        .title {
            color: gray;
            font-size: 1rem;
            padding: 0.5rem 0rem;
            border-bottom: solid lightgray 1px;
            margin: 16px 0px;
            padding: 8px 0px;
        }
    .content {
        color: gray;
        font-size: 0.8rem;
        padding: 0rem;
        margin: 0;
    }
    .authorImage {
        width: 40px;
        height: 40px;
        object-fit: cover;
        border-radius: 5px;
        margin-right: 1rem;
    }
    }
`;
const Card = styled.div`
    .blogImage {
        max-height: 400px;
    }
    .date {
        color: gray;
        font-size: 1rem;
        padding: 0.5rem 0rem;
        border-bottom: solid lightgray 1px;
    }
`;
