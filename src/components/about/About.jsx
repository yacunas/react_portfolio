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
          I describe myself as persistent, quick learner and has a great interest in problem solving by utilizing simple yet scalable solutions.
        </p>
      </div>

    </section>
  )
}

export default About