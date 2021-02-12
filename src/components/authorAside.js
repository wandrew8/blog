import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import Img from "gatsby-image"


const AuthorAside = ({ author, authorImage }) => {
  return (
    <>
      <h1>{author}</h1>
      <Img fluid={authorImage} alt={author}/>
    </>
  )
}

export default AuthorAside
