import React from 'react'


const style={
  width:"120px",
  borderRadius: "20px",
  color:"white",
  padding: "15px",
  margin: "2px 5px",
  textAlign:"center",
  fontSize: "20px",
  cursor:"pointer",
  border:"2px solid #8697A6"
}

function Button({text, href, onClick, color}) {
  return (
   <a href={href} onClick={onClick} style={{...style, background:color}}> {text} </a> 
  )
}

export default Button