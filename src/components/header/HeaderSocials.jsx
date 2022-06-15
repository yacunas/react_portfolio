import React from 'react'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {SiUpwork} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/yacunas" target='_blank'><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/ronnel-james-yacunas-610a2422b" target='_blank'><AiFillLinkedin/></a>
        <a href="https://www.upwork.com/freelancers/~012acef688d37ad415" target='_blank'><SiUpwork/></a>
    </div>
  )
}

export default HeaderSocials