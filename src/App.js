import './App.css';
import { Header, Posts, Footer, AddPost } from './facebook-components';
import React, { useState } from 'react';



function App() {
  const addPost = (newPost)=>{
    setPosts([newPost, ...posts]);
  
  }
  
  const [posts, setPosts] = useState([{
   
    id:0,
    title: "Hello world!",
    media:{
      id:0,
      url:'https://media3.giphy.com/media/HEURGne9Vj856oivkD/200.gif?cid=e1bb72ffx7u5h7zlgwpijvrvllb6o22eh7wdvt3czh067wmc&rid=200.gif&ct=g',
      mediaType:Image
  }},
  ]);
  return (
   <>
   
   <Header title="Facebook" searchBar={true}/>
   <AddPost addPost={addPost}/>
   <Posts posts={posts} />
   <Footer/>
   </>
  );
}

export default App;
