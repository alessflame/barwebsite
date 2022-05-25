import React from 'react'
import { Link } from 'react-router-dom'
import stile from './style/cardmenu.module.css'
import Text from './Text'

function CardMenu({src, name, alcoholic, id}) {

   

  return (
    <div className={stile.card} >

        <h3><Link to={`/menu/${id}`}>{name} </Link></h3>
        
         <img  className={stile.imageCard} src={src} alt="drinks"></img>
         
         <Text text={alcoholic}/>

         
      
    </div>
  )
}

export default CardMenu