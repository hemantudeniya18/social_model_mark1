import React from 'react'
import './Posts.css'
import { PostsData } from '../../Data/PostsData'
const Post = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id)=>{
      return<Post/>
      })}
    </div>
  )
}

export default Post 