import React from 'react'
import Screen from './Screen'
import BookingForm from './BookingForm'
import './Form.css'

export default function BookTable( {times} ) {
  return (
    <div className='background-img' style={{paddingTop:'55px'}}>
      <Screen height='100vh'>
        <BookingForm times={times}/>
      </Screen>
    </div>
  )
}
