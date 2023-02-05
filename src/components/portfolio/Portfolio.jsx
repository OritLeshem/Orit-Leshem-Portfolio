import React from 'react'
import './Portfolio.css'
import FIVERR from '../../assets/fiverr.svg'
import NOTE from '../../assets/note1.svg'
import MEME from '../../assets/meme.svg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={NOTE} alt="portfolio" />
          </div>
          <h3>Appsus - inspired by google keep and gmail</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/OritLeshem/appsus" className='btn' target='_blank'>Github</a>
            <a href="https://oritleshem.github.io/appsus/" className='btn btn-primary' target='_blank'>Live-demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={FIVERR} alt="portfolio" />
          </div>
          <h3>finderr - inspired by fiverr</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/OritLeshem/sprint4-fiverr" className='btn' target='_blank'>Github</a>
            <a href="https://finderr.onrender.com" className='btn btn-primary' target='_blank'>Live-demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={MEME} alt="portfolio" />
          </div>
          <h3>MIMI - meme generator</h3>
          <div className='portfolio__item-cta'>
            <a href="https://github.com/OritLeshem/Meme-Generator" className='btn' target='_blank'>Github</a>
            <a href="https://oritleshem.github.io/Meme-Generator/" className='btn btn-primary' target='_blank'>Live-demo</a>
          </div>
        </article>
      </div>
    </section>

  )
}
export default Portfolio