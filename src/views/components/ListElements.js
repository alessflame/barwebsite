import React from 'react'
import stile from "./style/listelement.module.css"

function ListElements({title, elements}) {
  return (
    <ul className={stile.list}>
         <h2>{title}</h2>

     {elements.map(element=> element)}

    </ul>
  )
}

export default ListElements