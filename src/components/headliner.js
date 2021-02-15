import React from 'react'
import styled from 'styled-components'

const Headliner = ({ data }) => {
    const { author, date, path, title } = data.frontmatter;
    return (
        <Container>
            <h1>{title}</h1>
        </Container>
    )
}

const Container = styled.div`

`;

export default Headliner;
