import React, { useState } from 'react'
import Text from './Text'
import stile from "./style/post.module.css"
import Button from './Button'
import {AiFillLike} from "react-icons/ai"

function Post({title, text , background, numberLike}) {

  const[like, setLike]= useState(numberLike);


  const newLike=()=>{
    setLike(like + 1)
  }




  return (
    <div className={stile.post}>
         <h2>{title}</h2>
       {!background===false ?<img src={background} className={stile.postImage} alt="post"/>: null } 
         <Text text={text} width="90%"/>
      <div style={{display:"flex" }} > <Text text={like}/>
      <Button onClick={newLike} color="#4A5B8C" text={<AiFillLike style={{color:"white", fontSize:"25px"}} />}  />
      </div>
    </div>
  )
}

export default Post