import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import {Grid, CircularProgress} from '@mui/material'
import {styled} from '@mui/system'
import { Styles } from './styles'

function Posts() {
  const posts = useSelector((state)=> state.posts)
  console.log(posts)
  const StyledGrid = styled(Grid)(()=> Styles.mainContainer)
  // console.log(posts)
  return(
    !posts.length? <CircularProgress/>:
    <StyledGrid container alignItems = "stretch" spacing = {3}>
      {posts.map(post => (
      <Grid key={post._id} item xs = {12} sm = {6}>
        <Post post = {post}/> 
      </Grid>  
  ))}

    </StyledGrid>
  
  )
}

export default Posts