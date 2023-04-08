import React from 'react'

export default function Screen( {children, height, color, maxHeight = height , id = '#a'} ) {
  return (
    <section id={id} style={{backgroundColor:`${color}`, height:`${height}` ,maxHeight:`${maxHeight}` ,width:'100%'}}>
      {children}
    </section>
  )
}
