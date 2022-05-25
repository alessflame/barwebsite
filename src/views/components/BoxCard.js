import React from 'react'
import stile from "./style/boxcard.module.css";
import PropTypes from 'prop-types';


function BoxCard({cards, background}) {
  return (
    <div className={stile.boxcard} style={{backgroundColor: background}}>


  { cards.map(element => {
       return element;
   }) }

    

    </div>
  )
}

BoxCard.propTypes={
  cards: PropTypes.array.isRequired,
  background: PropTypes.string.isRequired
}




export default BoxCard