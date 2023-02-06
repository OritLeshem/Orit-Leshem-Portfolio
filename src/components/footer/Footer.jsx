import React from 'react'
import './Footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { AiOutlinePhone } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Orit Leshem  </a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/orit-leshem/"><BsLinkedin /></a>
        <a href="https://github.com/OritLeshem"><FaGithub /></a>
      </div>

    </footer>
  )
}

export default Footer