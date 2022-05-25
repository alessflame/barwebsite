import React from 'react'
import { Link } from 'react-router-dom';
import stile from './style/footer.module.css';

function Footer() {
  return (
    <div className={stile.footer}>
         <b>
              Questa è una Web App di prova.
              Vai al mio account<a href="https://github.com/alessflame"> Github </a>
              per visualizzare altri progetti.
         </b>
    </div>
  )
}

export default Footer