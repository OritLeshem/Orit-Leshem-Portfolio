import React from 'react'
import CTA from './CTA'
import './Header.css'
import ME from '../../assets/orit.jpeg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello, I'm</h5>
        <h1>Orit Leshem</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img className="me-img" src={ME} alt="Orit-Leshem" />
        </div>
        <a className='scroll__down' href="#contact">Scroll down</a>

      </div>

    </header>)
}

export default Header