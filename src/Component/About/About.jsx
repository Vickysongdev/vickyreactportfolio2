import React from 'react'
import './About.css'
import Me from '../../Asset/pic car.jpg'
import{FaAward} from  'react-icons/fa'
import{FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from  'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div  className="container about__container">
        <div  className="about__me">
          <div  className="about__me-image">
            <img src={Me} alt="About Imag" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article  className="about__card">
              <FaAward className="about__icons"/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>
            <article  className="about__card">
              <FiUsers className="about__icons"/>
              <h5>Clients</h5>
              <small>300+ Worlwide</small>
            </article>
            <article  className="about__card">
              <VscFolderLibrary className="about__icons"/>
              <h5>Project</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>VickyTech software developer bringing solutions to the society within, an all over the world. <br /> Let us  give your project a volume of time to speak worlwide</p> 
          <a href="#contact" class="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
