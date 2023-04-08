import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <footer>
      <div className='left'>
        <img src={require('../img/logoFooter2.png')} alt='logo'/>
      </div>
      <div className='mid'>
        <ul>
          <Link className='footer-link' to='/'>Home</Link>
          <Link className='footer-link' to='/'>About Us</Link>
          <Link className='footer-link' to='/'>Menu</Link>
          <Link className='footer-link' to='/'>Reviews</Link>
          <Link className='footer-link' to='/reservations'>Reservations</Link>
          <Link className='footer-link' to='/login'>Login</Link>
        </ul>
      </div>
      <div className='right'>
        <p>littlelemon@events.com</p>
        <p>+1 650-543-4800</p>
        <div className='social-media'>
          <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
          <a href='https://www.youtube.com/'><FontAwesomeIcon icon={faYoutube} size='2x'/></a>
          <a href='https://twitter.com/home?lang=es'><FontAwesomeIcon icon={faTwitter} size='2x'/></a>
        </div>
      </div>
    </footer>
  )
}
