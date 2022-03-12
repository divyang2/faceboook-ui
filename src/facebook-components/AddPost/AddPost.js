import React from 'react'
import  { useState } from 'react';
import './AddPost.css'
import Popup from 'reactjs-popup';
import { generateUniqueId }  from "../../utils";


export const AddPost = (props) => {
  const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&limit=20&offset=0&q=";
   
    let [search, setSearch] = React.useState("");
    let [gifs, setGifs] = React.useState([]);
    let [loadingState, setLoadingState] = React.useState(false);
    let [popupOpen, setPopupOpen] = React.useState(false);
    let closePopup = () => setPopupOpen(false);
    const [newPost, setNewPost] = useState({id: generateUniqueId(), title: "", media: null});
    
    let searchGif = () => {
      setPopupOpen(true);
      if(search.length > 0){
        setLoadingState(true);
        fetch(GIPHY_API+search)
        .then((res)=>{
          setLoadingState(false);
          return res.json();
        })
        .then((result)=>{
          console.log(result);
          setGifs(result.data.map((gif)=>{
            return gif.images.fixed_height.url;
          }))
        })
        .catch(()=>{
          alert("Something went wrong");
          setLoadingState(false);
        })
      }

    }

    const submit = (e) =>{
        e.preventDefault();
        if(!newPost.title){
            alert("please write something")
        }else{
            props.addPost(newPost);
            setNewPost({id: generateUniqueId(),title: "", media: null})
        }
       
        
    }
    
    
  return (
    <div className="container my-4">
        <h3 className="text-center">Creat post</h3>
      
            <div className=" input mb-3">
            <label htmlFor="title" className="form-label"></label>
             <input type="text" className="form-control form-control-lg" value={newPost.title} onChange={(e)=>{setNewPost({...newPost, title: e.target.value})}} id="title" placeholder="What's on your mind?" />
             </div>   
             {newPost.media?<div className='item-image' style={{ backgroundImage: 'url(' + newPost.media.url + ')'}} ></div>:null}
             <div className="gif-container">
      <div className="header">
        <div>
          <input 
            type="text" 
            placeholder="add GIF"
            value={search}
            onChange={(e)=>setSearch(e.target.value)} 
          />

          
          <Popup 
          trigger={
            <button className="btn  btn-sm mx-1 btn-primary my-2" onClick={searchGif}>
              Search
            </button>} 
            position="bottom center"
            open={popupOpen}
            onOpen={searchGif}
            onClose={closePopup}
            contentStyle={{height: "200px", width: "250px", overflow: "auto"}}
            >
            <div className="result my-2">
              {
                (loadingState) ? (
                  <div className="loading">
                    <div className="loader">
                    </div>
                  </div>
                ) : (
                  <div className="list">
                    {
                      gifs.map((gif)=>{
                        return (
                          <div
                            key={gif}
                            className="item" 
                            style={{backgroundImage: 'url(' + gif + ')'}}
                            onClick={()=>{
                              setPopupOpen(false);
                              setNewPost({...newPost, media: {id: generateUniqueId, url: gif}});
                              setSearch("");
                            }}
                           />
                        )
                      })
                    }
                  </div>
                )
              }
            </div>
        </Popup>
        </div>
      </div>
    </div>
    <div className="d-grid gap-2 my-3" >
      <button onClick={submit} className="btn btn-primary" type="submit">Post</button>
    </div>
                
    </div>
  )
}




