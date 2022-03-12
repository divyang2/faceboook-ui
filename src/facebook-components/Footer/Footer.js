import React from 'react'

export const Footer = () => {
    let footerStyle ={
        position : "relative",
        top  : "100vh",
        width : "100%"
    }

  return (
    <footer className="bg-light text-dark py-3 " style={footerStyle} >
        <p className="text-center">
        Copyright &copy; Meta
        </p>
      
    </footer>
  )
}

