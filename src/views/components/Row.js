import React from 'react'
import Text from './Text'

function Row({text}) {
  return (
        <li style={{listStyleType: 'none',  margin:"5px 2px"}}>
             <Text text={text} />
        </li>
    
  )
}

export default Row