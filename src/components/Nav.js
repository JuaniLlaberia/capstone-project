import React, { useState } from 'react'
import './Nav.css';
import logo from '../img/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faB, faBars, faX } from '@fortawesome/free-solid-svg-icons'

export default function Nav() {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => setClicked(!clicked)
    const handleClickClose = () => setClicked(false);
  return (
    <header>
        <nav>
        <img className='logo' src={logo} alt='logo'/>
        <div onClick={handleClick} className='menu-icon'>{clicked ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}</div>
        <ul className={clicked ? 'navbar active' : 'navbar'}>
            <li onClick={handleClickClose}><a href='#' className='nav-item'>Home</a></li>
            <li onClick={handleClickClose}><a href='#' className='nav-item'>Menu</a></li>
            <li onClick={handleClickClose}><a href='#' className='nav-item'>About us</a></li>
            <li onClick={handleClickClose}><a href='#' className='nav-item'>Reservations</a></li>
            <li onClick={handleClickClose}><a href='#' className='nav-item order'>Order</a></li>
            <li onClick={handleClickClose}><a href='#' className='nav-item login'>Login</a></li>
        </ul>
        </nav>
    </header>
  )
}
