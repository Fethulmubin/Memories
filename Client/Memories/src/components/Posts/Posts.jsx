import React from 'react'
import Post from './Post/Post'
import { useSelector } from 'react-redux'
import {Grid, CircularProgress} from '@mui/material'
import {Styled} from '@mui/material'
import { Styles } from './styles'

function Posts() {
  const posts = useSelector((state)=> state.posts)
  const styledGrid = Styled(Grid)(()=> Styles.mainContainer)
  // console.log(posts)
  return 
    !posts.length? <CircularProgress/>:
    (
    <styledGrid container alignItems = "stretch" spacing = {3}>
      {posts.map((post)=>{
      <Grid key={post._id} item xs = {12} sm = {6}>
        <Post post = {post}/> 

      </Grid>  
  })}

    </styledGrid>
  )
}

export default Posts