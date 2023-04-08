import React, { useState } from 'react'
import './Form.css';

export default function BookingForm() {
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('default');
    const [guests, setGuests] = useState('')
    const [occasion, setOccasion] = useState('occasion');

    const clearForm = () => {
        setEmail('');
        setDate('');
        setTime('Select hour');
        setGuests('');
        setOccasion('Ocassion');
    }

    const handleSubmit = e => {
        e.preventDefault();
        clearForm()
        console.log(`${email}, ${date}, ${time}, ${guests}, ${occasion}`);
    }

    const validateForm = () => {
      return (email && date && time !== 'default' && guests && occasion !== 'occasion')
    }

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center', color:'#ffe224', fontSize:'2rem'}}>
            <h2>Book a Table</h2>
        </div>
        <label htmlFor='email'>Email</label>
        <input value={email} className='input-form' type='email' placeholder='Email Address' id='email' onChange={e => setEmail(e.target.value)}/>
        <div className='test'>
            <label htmlFor='table-date'>Date</label>
            <input value={date} className='input-form' type='date' min={new Date().toISOString().split('T')[0]} id='table-date' onChange={e => setDate(e.target.value)}/>
            <label htmlFor='table-time'>Time</label>
            <select value={time} id='table-time' className='input-form' onChange={e => setTime(e.target.value)}>
                <option value='default'>Select hour</option>
                <option value='18' >18:00</option>
                <option value='19' >19:00</option>
                <option value='20' >20:00</option>
                <option value='21' >21:00</option>
                <option value='22' >22:00</option>
                <option value='23' >23:00</option>
            </select>
        </div>
        <div className='test'>
            <label htmlFor='guests'>Guests</label>
            <input value={guests} type='number' min={1} max={15} placeholder='Guest num' id='guests' className='input-form' onChange={e => setGuests(e.target.value)}/>
            <label htmlFor='occasion'>Occassion</label>
            <select value={occasion} id='occasion' className='input-form' onChange={e => setOccasion(e.target.value)}>
                <option value='occasion'>Occasion</option>
                <option value='birthday'>Birthday</option>
                <option value='anni'>Anniversary</option>
                <option value='other'>Other</option>
            </select>
        </div>
        <button disabled={!validateForm()} type='submit' className='booking-btn'>Make Reservation</button>
      </form>
    </div>
  )
}
