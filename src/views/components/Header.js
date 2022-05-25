import React from 'react'
import Navbar from './Navbar'
function Header({title, background}) {
  return (
    
    <div className='header' style={{backgroundImage: `url(${background})`, position:"relative"}}>
      <Navbar />
         <h1 className='headerTitle'>{title}</h1>
     </div>
  )
}

export default Header