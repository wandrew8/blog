import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Img from "gatsby-image"
import { truncate } from 'lodash'
import useToggle from '../hooks/useToggle'


const AuthorAside = ({ mobile, author, authorImage, authorBio }) => {
    const [isToggled, setToggle] = useToggle(true);
    return (
      <>
        <div></div>
        { mobile && <Container>
            <div>
            <Img className="image" fluid={authorImage} alt={author}/>
            <p className="content">ABOUT</p>
            <h3>{author}</h3>
            <p className="content">{authorBio}</p>
            </div>
        </Container> }
        { !mobile && <MobileContainer>
            <div className="flex">
                <Img className="image" fluid={authorImage} alt={author}/>
                <div>
                    <h3>{author}</h3>
                    
                    { isToggled ? <p className="content">{truncate(authorBio, {
                        'length': 50,
                        'seperator': " "
                    })}</p> : <p>{authorBio}</p> }
                    <a onClick={setToggle}>{isToggled ? "Read more" : "Read less"}</a>
                </div>

            </div>
        </MobileContainer>}
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

const MobileContainer = styled.div`
    border-bottom: lightgray solid 1px;
    .flex {
        display: grid;
        grid-template-columns: 75px 1fr;
        grid-gap: 2rem;
        justify-content: center;
        
        .image {
            height: 75px;
            width: 75px;
            object-fit: cover;
            border-radius: 50%;
            margin-right: 2rem;
        }
        h3 {
            padding: 0;
            margin: 0;
        }
        p {
            margin: 10px 0px;
            padding: 0;
        }
    }
    a {
        color: gray;
        font-size: 0.8rem;
        cursor: pointer;
        margin: 0;
        padding: 0;
    }
`;

export default AuthorAside
