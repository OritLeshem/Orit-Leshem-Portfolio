import React from 'react'
import './Portfolio.css'
import FIVERR from '../../assets/fiverr.svg'
import SPOTIFY from '../../assets/spotify1.svg'
import NOTE from '../../assets/note1.svg'
import MEME from '../../assets/meme.svg'
// import CONTACT from '../../assets/contacts.svg'
import CONTACT from '../../assets/bitcoin2.svg'

import CHATGPT from '../../assets/chatgpt3.svg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={SPOTIFY} alt="portfolio" />
          </div>
          <h3>Inspired by Spotify </h3>
          <div className="portfolio__item-desc-container">
            <h3 className="portfolio__item-desc" >React | Redux | SCSS | Node.js | MongoDB | REST API</h3>
          </div>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/OritLeshem/spotify-app" className='btn' target='_blank'>Github</a>
            <a href="https://spotify-app-uejg.onrender.com/" className='btn btn-primary' target='_blank'>Live-demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={FIVERR} alt="portfolio" />
          </div>
          <h3>Inspired by Fiverr</h3>
          <div className="portfolio__item-desc-container">
            <h3 className="portfolio__item-desc">React | Redux | SCSS | Node.js | MongoDB</h3>
          </div>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/OritLeshem/sprint4-fiverr" className='btn' target='_blank'>Github</a>
            <a href="https://finderr.onrender.com" className='btn btn-primary' target='_blank'>Live-demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={CHATGPT} alt="portfolio" />
          </div>
          <h3>Inspired by chatGPT</h3>
          <div className="portfolio__item-desc-container">
            <h3 className="portfolio__item-desc">React | CSS | Node.js | REST API</h3>
          </div>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/OritLeshem/chat-gpt" className='btn' target='_blank'>Github</a>
            <a href="https://chat-gpt-az9j.onrender.com" className='btn btn-primary' target='_blank'>Live-demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={CONTACT} alt="portfolio" />
          </div>
          <h3>Contact list with info about Bitcoin rate</h3>
          <div className="portfolio__item-desc-container">
            <h3 className="portfolio__item-desc">Vue.js | Vuex | SCSS | REST API</h3>
          </div>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/OritLeshem/Mr-Bitcoin" className='btn' target='_blank'>Github</a>
            <a href="https://oritleshem.github.io/Mr-Bitcoin/" className='btn btn-primary' target='_blank'>Live-demo</a>
          </div>
        </article>

        {/* <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={NOTE} alt="portfolio" />
          </div>
          <h3>Appsus - inspired by google keep</h3>
          <div className="portfolio__item-desc-container">
            <h3 className="portfolio__item-desc">React | CSS</h3>
          </div>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/OritLeshem/appsus" className='btn' target='_blank'>Github</a>
            <a href="https://oritleshem.github.io/appsus/" className='btn btn-primary' target='_blank'>Live-demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={MEME} alt="portfolio" />
          </div>
          <h3>MIMI - meme generator</h3>
          <div className="portfolio__item-desc-container">
            <h3 className="portfolio__item-desc">JS | CANVAS | HTML | CSS</h3>
          </div>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/OritLeshem/Meme-Generator" className='btn' target='_blank'>Github</a>
            <a href="https://oritleshem.github.io/Meme-Generator/" className='btn btn-primary' target='_blank'>Live-demo</a>
          </div>
        </article> */}
      </div>
    </section>

  )
}
export default Portfolio