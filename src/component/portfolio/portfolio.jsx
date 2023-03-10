import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'

import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import IMG7 from '../../assets/portfolio7.jpg'



const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>
        My Recent Work
      </h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
      <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG7} alt='' />
          </div>
          <h3>My Medo-Genic App UI</h3>
          <div className="portfolio__item-cta">
          
          <a href="https://www.figma.com/proto/8g1G1f3tv3tLUvlyDzlHr3/Coolors-(Community)?page-id=0%3A1&node-id=1%3A2&viewport=1818%2C638%2C0.54&scaling=scale-down&starting-point-node-id=1%3A2&show-proto-sidebar=1" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG1} alt='' />
          </div>
          <h3>Travel & Tour React Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Distructor2404/Travel_Website" className='btn' target='_blank'>Github</a>
          <a href="https://distructor2404.github.io/Travel_Website/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG2} alt='' />
          </div>
          <h3>Neon VR Movies Platform UI using Figma</h3>
          <div className="portfolio__item-cta">
          
          <a href="https://www.figma.com/proto/1Cw0UvlYVCKqcoqOQKNwjP/Neon-VR-movies-app-UI?node-id=4%3A76&scaling=min-zoom&page-id=1%3A981&starting-point-node-id=4%3A76" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG3} alt='' />
          </div>
          <h3>Bicycle Phone UI using Figma</h3>
          <div className="portfolio__item-cta">
          
          <a href="https://www.figma.com/proto/jR8yAc485qYrIgriEu978w/Bicycle-App-UI?node-id=1%3A2276&scaling=min-zoom&page-id=1%3A4&starting-point-node-id=1%3A2921" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG4} alt='' />
          </div>
          <h3>Financial Dashboard using Excel</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target='_blank'>Github</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG5} alt='' />
          </div>
          <h3>Behance Graphics Portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://www.behance.net/abhishekumars9" className='btn' target='_blank'>Behance</a>
          
          </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
              <img src={IMG6} alt='' />
          </div>
          <h3>Parallax Scrolling Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/Distructor2404/Parallex-Scrolling-Website" className='btn' target='_blank'>Github</a>
          <a href="https://distructor2404.github.io/Parallex-Scrolling-Website/" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>

        
      </div>
    </section>
  )
}

export default portfolio