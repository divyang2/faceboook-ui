import React from 'react'
import Post from '../Post'

export const Posts = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-5">Posts</h3>
      {props.posts.length===0? "No Post Available":
      props.posts.map((post)=>{
          return (
          <Post {...post} key={post.id} />
          )
      })}
        
    </div>
  )
}
