import React from 'react'
import './Experience.css'
import { DiJavascript1 } from 'react-icons/di'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3Full } from 'react-icons/di'
import { FaReact } from 'react-icons/fa'
import { RiVuejsLine } from 'react-icons/ri'
import { RiAngularjsLine } from 'react-icons/ri'
import { DiSass } from 'react-icons/di'
import { SiMaterialui } from 'react-icons/si'
import { BsBootstrap } from 'react-icons/bs'
import { DiMongodb } from 'react-icons/di'
import { SiPostman } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { SiNodedotjs } from 'react-icons/si'
import { DiMysql } from 'react-icons/di'
import { DiPython } from 'react-icons/di'






const Experience = () => {
  return (
    <section id='experience'>
      <h5>What skills I have?</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            {/* js HTML 5 CSS 3 */}
            <article className='experience__details'>
              <DiJavascript1 className='experience__details-icon' />
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineHtml5 className='experience__details-icon' />
              <h4>HTML 5</h4>
            </article>
            <article className='experience__details'>
              <DiCss3Full className='experience__details-icon' />
              <h4>CSS 3</h4>
            </article>
            {/* react.js vue.js angular.js */}
            <article className='experience__details'>
              <FaReact className='experience__details-icon' />
              <h4>React.js</h4>
            </article>
            <article className='experience__details'>
              <RiVuejsLine className='experience__details-icon' />
              <h4>Vue.js</h4>
            </article>
            <article className='experience__details'>
              <RiAngularjsLine className='experience__details-icon' />
              <h4>Angular.js</h4>
            </article>
            <article className='experience__details'>
              <DiSass className='experience__details-icon' />
              <h4>SCSS</h4>
            </article>
            {/* material */}
            <article className='experience__details'>
              <SiMaterialui className='experience__details-icon' />
              <h4>Material UI</h4>
            </article>
            <article className='experience__details'>
              <BsBootstrap className='experience__details-icon' />
              <h4>Bootstrap</h4>
            </article>
            <article className='experience__details'>
              <AiFillGithub className='experience__details-icon' />
              <h4>Github</h4>
            </article>




          </div>

        </div>
        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <SiNodedotjs className='experience__details-icon' />
              <h4>Node.js</h4>
            </article>
            <article className='experience__details'>
              <p style={{ fontSize: "10px" }} className='experience__details-icon'>ex</p>              <h4>Express</h4>
            </article>
            <article className='experience__details'>
              <DiMongodb className='experience__details-icon' />
              <h4>MongoDB</h4>
            </article>
            <article className='experience__details'>
              <SiPostman className='experience__details-icon' />
              <h4>Postman</h4>
            </article>
            <article className='experience__details'>
              <DiMysql className='experience__details-icon' />
              <h4>MySQL</h4>
            </article>
            <article className='experience__details'>
              <DiPython className='experience__details-icon' />
              <h4>Python</h4>
            </article>
            <article className='experience__details'>
              <h6>render</h6>
              {/* <RiVuejsLine className='experience__details-icon' /> */}
              <h4>Render</h4>
            </article>

          </div>

        </div>
      </div>

    </section>
  )
}

export default Experience