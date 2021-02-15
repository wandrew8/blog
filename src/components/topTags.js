import React from 'react'
import { kebabCase } from 'lodash'
import styled from 'styled-components'
import { devices } from '../styles/devices'
import { Link } from "gatsby"


const TopTags = ({tags}) => {
    return (
        <Container>
            <h2>Topics to Follow</h2>
            { tags.map(tag => {
                return (
                <Link key={tag.fieldValue} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                    <p>{tag.fieldValue}</p>
                </Link>
                )
            })}
            <Link to="/tags/">More Topics</Link>
        </Container> 
    )
}

export default TopTags

const Container = styled.div`
    max-width: 350px;
    min-width: 300px;
    width: auto;
    padding-bottom: 1rem;
    border-bottom: 1px solid lightgray;
`;
