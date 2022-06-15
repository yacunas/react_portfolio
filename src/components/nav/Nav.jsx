import React from 'react'
import './nav.css'
import {RiHomeSmile2Line} from 'react-icons/ri'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineBookmarkAdded} from 'react-icons/md'
import {BiMessageDots} from 'react-icons/bi'
import {MdOutlineWorkOutline} from 'react-icons/md'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} ><RiHomeSmile2Line/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineBookmarkAdded/></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineWorkOutline/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDots/></a>
    </nav>
  )
}

export default Nav