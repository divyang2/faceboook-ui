import React from 'react'
import PropTypes from 'prop-types'

export default function Header(props) {
  
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <img src="https://img.icons8.com/color/48/000000/facebook-new.png" alt=""/>
    
      <div className="navbar-brand" href="#">{props.title}</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       {props.searchBar? <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Facebook Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> :""}
      </div>
    </div>
  </nav>
  )
}

Header.defaultProps={
    title:"Your title here",
    searchBar: true
}

Header.prototype={
    title:PropTypes.string,
    searchBar:PropTypes.bool.i
}
