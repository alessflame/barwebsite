import React from 'react'
import stile from "./style/avatarcard.module.css";
import Text from './Text';


function AvatarCard({img, name, text}) {
  return (
    <span className={stile.card}>
      
      <img style={{width:"200px", height:"200px", borderRadius:"50%"}} src={img}  alt="caiooo"/>
      <h3>{name}</h3>
      <Text text={text} width="80%" />
      
    </span>
  )
}

export default AvatarCard