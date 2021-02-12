import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Img from "gatsby-image"


const AuthorAside = ({ author, authorImage, authorBio }) => {
  return (
      <>
        <div></div>
        <Container>
            <div>
            <Img className="image" fluid={authorImage} alt={author}/>
            <p className="content">ABOUT</p>
            <h3>{author}</h3>
            <p className="content">{authorBio}</p>
            </div>
        </Container>
      </>
  )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
    height: 100vh;
    width: 200px;
    position: fixed;
    padding: 1rem;
    top: 0;
    h3 {
        font-size: 1.2rem;
        padding: 0;
        margin: 0;
        margin-bottom: 0.25rem;
    }
    .content {
        color: gray;
        font-size: 0.8rem;
        padding: 0rem;
        margin: 0;
    }
    .image {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        margin: 0 auto 2rem auto;
        position: fixed;
    }
`;

export default AuthorAside
