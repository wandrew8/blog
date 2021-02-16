import React from 'react'
import { kebabCase } from 'lodash'
import styled from 'styled-components'
import { devices } from '../styles/devices'
import { Link } from "gatsby"


const TopTags = (props) => {
    const { tags, limit } = props;
    return (
        <Container>
            <h2>Topics to Follow</h2>
            { tags.filter((tag, i) => i < limit).map(tag => {
                return (
                <Link className="tag" key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <div className="tagContainer">
                        <p>{tag.fieldValue}</p>
                    </div>
                </Link>
                )
            })}
            <div className="link">
                <Link to="/tags/">See More</Link>
            </div>
        </Container> 
    )
}

export default TopTags

const Container = styled.div`
    max-width: 350px;
    min-width: 300px;
    width: auto;
    border-bottom: 1px solid lightgray;
    h2 {
        padding: 0;
        padding-top: 0.5rem;
        margin: 0;
    }
    .tag {
        color: black;
        cursor: pointer;
        text-decoration: none;
        font-size: 14px;
    }
    .tagContainer {
        padding: 0.25rem 0rem;
        border-bottom: solid 1px lightgray;
    }
    .link {
        margin: 1rem 0rem;
         a {
             color: gray;
             text-decoration: none;

         }
    }
`;
