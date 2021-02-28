import React from 'react'
import LongBlogCard from '../components/longBlogCard'
import styled from 'styled-components'

const NewsFeed = ({ posts }) => {
    return (
        <Container>
            <h1>Top Articles</h1>
            {posts.map(({ node: post }) => {
            return (
              <LongBlogCard key={post.id} post={post} showAuthor={true}/>
            )
          })}
        </Container>
    )
}

export default NewsFeed

const Container = styled.div`
    margin: 0 auto;
    padding: 0rem 2rem;
    max-width: 1200px;
`;

  