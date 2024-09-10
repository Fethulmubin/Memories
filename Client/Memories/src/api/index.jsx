import axios from 'axios'
import Post from '../components/Posts/Post/Post'

import React from 'react'

export default index
const url = 'http://localhost:5555/posts/'
export const fetchPosts = ()=> axios.get(url);
export const createPosts = (newPost)=> axios.post(url, newPost );
export const updatePosts = (id, updatedPost)=> axios.patch(`${url}${id}`, updatedPost );
export const deletePosts = (id)=> axios.delete(`${url}${id}` );
export const likePosts = (id)=> axios.patch(`${url}${id}/like`);

function index() {
  return (
    <div>
        <Post deletePosts={deletePosts}/>
    </div>
  )
}


{/* <Post deletePosts={deletePosts}/> */}
