import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { AiOutlinePhone } from 'react-icons/ai'

const Contact = () => {

  return (
    <section id='contact'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <AiOutlinePhone className='contact__option-icon' />
            <h4>Phone number</h4>
            <h5>519-933-0049</h5>
            <h5>London ON, Canada</h5>
          </article>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>azmono@mail.com</h5>
            <a target='_blank' href="mailto:azmono@gmail.com">Send a message</a>
          </article>
          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messanger</h4>
            <h5>Orit Leshem</h5>
            <a target='_blank' href="https://m.me/orit.leshem.3">Send a message</a>
          </article>

        </div>

      </div>

    </section>
  )
}

export default Contact