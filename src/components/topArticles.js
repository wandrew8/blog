import React from 'react'
import styled from 'styled-components'
import { devices } from '../styles/devices'
import BlogCard from '../components/blogCard'
import Headliner from '../components/headliner'

const topArticles = ({ data }) => {
    const otherArticles = data.slice(1);
    console.log(otherArticles)
    return (
        <div>
            <Grid>
                <Headliner data={data[0].node}/>
                <div className="smaller">
                    {otherArticles.map(article => {
                        return (
                            <BlogCard post={article.node} />
                        )
                    })}
                </div>
            </Grid>
        </div>
    )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    max-width: 1000px;
    margin: 2rem auto;
    @media ${devices.tablet} {
        grid-template-columns: 1fr 1fr;
    }
`;

export default topArticles;

