import React from 'react'
import{ useState } from 'react';
import "./Post.css"

export const Post = (props ) => {
    const [count, setCount] = useState(0);
    console.log({props});
  return (
    <div className="post-container my-2" > 
    <div className="text-center my-3">
      <h4 className="text-center">{props.title}
      </h4>
      <img src={props.media?.url} alt="" />
      <div className="likes my-2">
      <button className="btn btn-sm btn-outline-info" onClick={() => setCount(count + 1)}>
          <img 
          src="https://img.icons8.com/external-those-icons-lineal-those-icons/24/000000/external-like-touch-gestures-those-icons-lineal-those-icons.png" 
          alt=""/>
      </button>
      <p className="text-center my-2 mx-3">{count} Likes</p>
      </div>
    </div>
    </div> 
  )
}


