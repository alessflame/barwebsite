import React from 'react'

const stile= { 
     margin:"15px 3px",
     backgroundColor: "#EDEDED" ,
     height: "auto",
     padding: "5px 10px",
     borderRadius: "5px",
     fontSize: "20px",
     fontWeight: "300"
     }

     

function Text({text, width}) {
  return (
     <div className='text' style={{...stile, width: width}}>
         {text}
    </div>
  )
}

export default Text