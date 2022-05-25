import React, { useEffect } from 'react'
import { useState } from 'react'

import SectionPost from "./components/SectionPost"

const BlogPosts=[
 
  { id:1,
   title:"Tra i più frequentati!", 
  text:"Il nostro DrinkSmart è stato al inserito al 2° posto nella classifica dei posti più frequentati a livello locale." ,
   background:"../images/minimal-back.jpg",
  like: 25},

 {id:2,
    title:"La nostra birra è tradizione", 
    text:`Fare una buona birra artigianale non è semplice, la nostra birra è il frutto
     di moltissimi anni d'esperienza. Molti esperti hanno assaggiato la nostra birra e siamo 
     contenti nel sapere che il 90% di loro ha lasciato recensioni estremamente positive. ` ,
     background:"../images/beer.jpg",
    like:40},
]


 


function Blog() {

 const [posts, setPosts] = useState([])

 useEffect(()=> setPosts(BlogPosts), []);
  


  return (
    <div>
      <SectionPost posts={posts}  />
    </div>
  )
}

export default Blog