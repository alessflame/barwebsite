import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

function Navbar(){

  const[open, setOpen]= useState();
  const[mobile, setMobile]=useState();

   useEffect(()=>{

     if(window.screen.width > 600){
      setOpen(true);
     setMobile(false);
     
   }else{
     setMobile(true);
     setOpen(false)
   }}, []);

  const toggleMenu=()=>{
    console.log(window.screen.width);
    setOpen(!open);
    }
  

  return ( 
    <div className='navBar'>

  <ul className={open === true ? 'menu' : 'menuMove'}>   
     <Link to="/"> Home</Link>
     <Link to="/about"> About</Link>
     <Link to="/blog"> Blog</Link>
     <Link to="/menu"> Menu </Link>
    </ul> 
   

     <div className='hamburger' onClick={toggleMenu} >
     {open === false ? <AiOutlineMenu className='icon'/> : <AiOutlineClose className='icon'/>}
     </div> 
    

    </div>
  )
}

export default Navbar