import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Img from "gatsby-image"
import { truncate } from 'lodash'
import useToggle from '../hooks/useToggle'


const AuthorAside = ({ mobile, author, date, authorImage, authorBio }) => {
    const [isToggled, setToggle] = useToggle(true);
    return (
      <>
        <div></div>
        { mobile && <Container>
            <div>
            <Img className="authorImage" fluid={authorImage} alt={author}/>
            <p className="content">ABOUT</p>
            <h3>{author}</h3>
            <p className="content">{authorBio}</p>
            </div>
        </Container> }
        { !mobile && <MobileContainer>
            <div className="flex">
                <Img className="image" fluid={authorImage} alt={author}/>
                <div>
                    <h3>{author} · <span className="date">{date}</span></h3>
                    <a onClick={setToggle}>
                        { isToggled ? <p className="content">{truncate(authorBio, {
                            'length': 40,
                            'seperator': " "
                        })}</p> : <p>{authorBio}</p> }
                    </a>
                </div>
            </div>
            <div className="button">
                { authorBio ? <a onClick={setToggle}>{isToggled ? "﹀" : "︿"}</a> : null }
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
    .authorImage {
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
    margin-bottom: 1rem;
    .flex {
        display: grid;
        grid-template-columns: 45px 1fr;
        grid-gap: 1rem;
        justify-content: center;
        .image {
            height: 45px;
            width: 45px;
            object-fit: cover;
            border-radius: 50%;
        }
        h3 {
            padding: 0;
            margin: 0;
            font-size: 0.9rem;
        }
        p {
            margin: 0px 0px;
            padding: 0;
            font-size: 0.7rem;
        }
    }
    a {
        color: gray;
        font-size: 0.8rem;
        cursor: pointer;
        margin: 0;
        padding: 0;
        
    }
    .button {
        text-align: center;
    }
    .date {
        color: gray;
        font-size: 0.7rem;
    }
`;

export default AuthorAside
