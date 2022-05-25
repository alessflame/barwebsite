import React from 'react'
import Post from './Post'

function SectionPost({posts}) {
  return (
    <div style={{display: "flex", flexDirection: "column", alignItems:"center"}}>
         {posts.map(post => <Post key={post.id} background={post.background} text={post.text} 
         title={post.title} numberLike={post.like}/>)}
    </div>
  )
}

export default SectionPost