import React from 'react'
import './about.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <BsCheckCircleFill className='about__icon'/>
        <p>
          I describe my self as persistent, quick learner and enjoys problem solving by using simple yet scalable solutions.
        </p>
      </div>

    </section>
  )
}

export default About