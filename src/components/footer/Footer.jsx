import React from 'react'
import './footer.css'
import {GrFacebookOption, GrInstagram, GrLinkedinOption} from 'react-icons/gr'

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer__logo'>Ronnel James Yacunas</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/ronneljames.yacunas" target='_blank'><GrFacebookOption/></a>
        <a href="https://instagram.com/yacunass" target='_blank'><GrInstagram/></a>
        <a href="https://www.linkedin.com/in/ronnel-james-yacunas-610a2422b" target='_blank'><GrLinkedinOption/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Ronnel James Yacunas. All rights reserved.</small>
      </div>
    </footer >
  )
}

export default Footer