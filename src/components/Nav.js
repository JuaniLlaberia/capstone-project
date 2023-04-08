import React, { useState, useEffect, useRef } from 'react'
import './Nav.css';
import logo from '../img/Logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';



export default function Nav() {
    const [clicked, setClicked] = useState(false);

    const handleScroll = (section) => {
      setClicked(!clicked)
      const id = `${section}-section`;
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }};

    const displaySections = [['aboutus','About Us'], ['menu','Menu'], ['testimonial', 'Reviews']].map((el, i) => {
        return(
            <li key={i} className='nav-item' onClick={() => handleScroll(el[0])}>{el[1]}</li>
        )
    })

    const test = useRef(null);
    //We could use the intersection API also to do this
    useEffect(() => {
      let prevScrollPos = window.scrollY;
      const handleScroll = () => {
        const currentScrollPos = window.scrollY
        const navbar = test.current;

        if(!navbar) return;
        if (prevScrollPos > currentScrollPos) {
          navbar.style.transform = 'translateY(0)';
        } else {
          navbar.style.transform = 'translateY(-200px)';
        }
        prevScrollPos = currentScrollPos;
      }

      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClick = () => setClicked(!clicked)
    const handleClickClose = () => setClicked(false);
  return (
    <header>
        <nav ref={test}>
        <img className='logo' src={logo} alt='logo'/>
        <div onClick={handleClick} className='menu-icon'>{clicked ? <FontAwesomeIcon icon={faX} /> : <FontAwesomeIcon icon={faBars} />}</div>
        <ul className={clicked ? 'navbar active' : 'navbar'}>
            <Link to='/' className='nav-item' onClick={handleClickClose}>Home</Link>
            {/* <li className='nav-item' onClick={() => handleClickClose('aboutus')}>About us</li>
            <li onClick={handleClickClose}><a href='menu-section' className='nav-item'>Menu</a></li>
            <li onClick={handleClickClose}><a href='testimonial-section' className='nav-item'>Reviews</a></li> */}
            {displaySections}
            <Link onClick={handleClickClose} to='/reservations' className='nav-item'>Reservations</Link>
            <Link onClick={handleClickClose} to='/login' className='nav-item login'>Login</Link>
        </ul>
        </nav>
    </header>
  )
}
