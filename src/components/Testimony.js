import React from 'react'

export default function Testimony( {user, imgSrc, score, review} ) {
  return (
    <div className='testimony-container'>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', gap:'25px'}}><img src={imgSrc} alt='user image'/><h6>{user}</h6></div>
        <h6>{score}⭐</h6>
        <p>{review}</p>
    </div>
  )
}
