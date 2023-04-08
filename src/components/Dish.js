import React from 'react'

export default function Dish( {imgSrc, name, price, description} ) {
  return (
    <div className='dish-container'>
      <img src={imgSrc} alt={name} className='dish-img'/>
      <h4 className='dish-title'>{name} <span className='dish-price'>{price}</span></h4>
      <p className='dish-desc'>{description}</p>
    </div>
  )
}
