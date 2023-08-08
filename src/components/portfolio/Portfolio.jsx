// Portfolio.js
import React, { useState } from 'react';
import './Portfolio.css';
import FIVERR from '../../assets/fiverr.svg';
import SPOTIFY from '../../assets/spotify1.svg';
import CONTACT from '../../assets/bitcoin2.svg';
import CHATGPT from '../../assets/chatgpt3.svg';
import CHATGPTVIDEO from '../../assets/chatgpt-video.mp4';
import FINDERRVIDEO from '../../assets/finderr-video.mp4';
import SPOTIFYVIDEO from '../../assets/finderr-video.mp4';
import CONTACTVIDEO from '../../assets/finderr-video.mp4';

const Portfolio = () => {
  const videoItems = [
    {
      img: SPOTIFY,
      title: 'Inspired by Spotify',
      videoSrc: SPOTIFYVIDEO,
      description: 'React | Redux | SCSS | Node.js | MongoDB | REST API',
      githubUrl: 'https://github.com/OritLeshem/spotify-app',
      liveDemoUrl: 'https://spotify-app-uejg.onrender.com/',
    },
    {
      img: FIVERR,
      title: 'Inspired by Fiverr',
      videoSrc: FINDERRVIDEO,
      description: 'React | Redux | SCSS | Node.js | MongoDB',
      githubUrl: 'https://github.com/OritLeshem/sprint4-fiverr',
      liveDemoUrl: 'https://finderr.onrender.com',
    },
    {
      img: CHATGPT,
      title: 'Inspired by chatGPT',
      videoSrc: CHATGPTVIDEO,
      description: 'React | CSS | Node.js | REST API',
      githubUrl: 'https://github.com/OritLeshem/chat-gpt',
      liveDemoUrl: 'https://chat-gpt-frontend.onrender.com/',
    },
    {
      img: CONTACT,
      title: 'Contact list with info about Bitcoin rate',
      videoSrc: CONTACTVIDEO,
      description: 'Vue.js | Vuex | SCSS | REST API',
      githubUrl: 'https://github.com/OritLeshem/Mr-Bitcoin',
      liveDemoUrl: 'https://oritleshem.github.io/Mr-Bitcoin/',
    },
  ]

  const [activeVideoIndex, setActiveVideoIndex] = useState(null);

  const handlePlay = (index) => {
    if (activeVideoIndex === index) {
      // If the same video is already playing, close it
      setActiveVideoIndex(null)
    } else {
      // If a different video is playing or no video is playing, play the clicked video
      setActiveVideoIndex(index)
    }
  }



  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {videoItems.map((item, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={item.img} alt="portfolio" />
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-desc-container">
              <h3 className="portfolio__item-desc">{item.description}</h3>
            </div>
            <div className="portfolio__item-cta">
              <a href={item.githubUrl} className="btn" target="_blank" rel="noopener noreferrer">
                Github
              </a>
              <a href={item.liveDemoUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live-demo
              </a>
              <button className="btn" onClick={() => handlePlay(index)}>
                {activeVideoIndex === index ? 'Close' : 'Video'}
              </button>
            </div>
            {activeVideoIndex === index && (
              <div>
                <video
                  autoPlay
                  controls
                  style={{ width: '100%', maxWidth: '800px' }}
                  src={item.videoSrc}
                />
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}


export default Portfolio
