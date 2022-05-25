import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <h1>RISORSA NON TROVATA</h1>
      <h3>Error 404</h3>
      <button className='btn'><Link to="/">Home</Link></button>
    </div>
  )
}

export default ErrorPage