import React from 'react'
import './portfolio.css'
import {FiGithub} from 'react-icons/fi'
import {SiUpwork} from 'react-icons/si'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <a href='https://github.com/yacunas' target="_blank" className='portfolio__item'>
          <FiGithub className='portfolio__icon'/>
          <h4>Github</h4>
        </a>
        <a href='https://www.upwork.com/freelancers/~012acef688d37ad415' target="_blank" className='portfolio__item'>
          <SiUpwork className='portfolio__icon'/>
          <h4>Upwork</h4>
        </a>
      </div>
    </section>
  )
}

export default Portfolio