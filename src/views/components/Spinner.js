import React from 'react'
import stile from "./style/spinner.module.css"



function Spinner() {
  return (
     <span className={stile.loadingContainer}> <div className={stile.loading}></div></span>

  )
}

export default Spinner