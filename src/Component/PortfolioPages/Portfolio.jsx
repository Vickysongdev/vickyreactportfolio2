import React from 'react'
import './Portfolio.css'
import IMG1 from '../../Asset/network.png'
import IMG2 from '../../Asset/project pic 1.jpg'

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div  className="container portfolio__container">
        <article  className="portfolio__item">
          <div   className="portfolio__item-image">
            <img src={IMG1} alt="network" />
          </div>
          <h3>This is a portfolio item</h3>
          <div  className="portfolio__item-cta">
          <a href="https://github.com/Vickysongdev/Agency-websit.git" class="btn"  target="_blank">GitHub</a>
          <a href="https://https://dribbble.com" class="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>


        <article  className="portfolio__item">
          <div   className="portfolio__item-image">
            <img src={IMG2} alt="network" />
          </div>
          <h3>This is a portfolio item</h3>
          <div  className="portfolio__item-cta">
          <a href="https://github.com/Vickysongdev/Agency-websit.git" class="btn"  target="_blank">GitHub</a>
          <a href="https://https://dribbble.com" class="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>

        <article  className="portfolio__item">
          <div   className="portfolio__item-image">
            <img src={IMG1} alt="network" />
          </div>
          <h3>This is a portfolio item</h3>
          <div  className="portfolio__item-cta">
          <a href="https://github.com/Vickysongdev/Agency-websit.git" class="btn"  target="_blank">GitHub</a>
          <a href="https://https://dribbble.com" class="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>


        <article  className="portfolio__item">
          <div   className="portfolio__item-image">
            <img src={IMG2} alt="network" />
          </div>
          <h3>This is a portfolio item</h3>
          <div  className="portfolio__item-cta">
          <a href="https://github.com/Vickysongdev/Agency-websit.git" class="btn"  target="_blank">GitHub</a>
          <a href="https://https://dribbble.com" class="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>


        <article  className="portfolio__item">
          <div   className="portfolio__item-image">
            <img src={IMG1} alt="network" />
          </div>
          <h3>This is a portfolio item</h3>
          <div  className="portfolio__item-cta">
          <a href="https://github.com/Vickysongdev/Agency-websit.git" class="btn"  target="_blank">GitHub</a>
          <a href="https://https://dribbble.com" class="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>


        <article  className="portfolio__item">
          <div   className="portfolio__item-image">
            <img src={IMG2} alt="network" />
          </div>
          <h3>This is a portfolio item</h3>
          <div  className="portfolio__item-cta">
          <a href="https://github.com/Vickysongdev/Agency-websit.git" class="btn"  target="_blank">GitHub</a>
          <a href="https://https://dribbble.com" class="btn btn-primary" target='_blank'>Live Demo</a>
          </div>
        </article>


        
      </div>
    </section>
  )
}

export default Portfolio