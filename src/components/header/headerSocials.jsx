import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsFacebook} from 'react-icons/bs'

const headerSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/ren-cosmos?tab=repositories" target="_blank"                       ><FaGithub /></a>
        <a href="https://www.linkedin.com/in/shivamgrover360/" target="_blank"                       ><BsLinkedin /></a>
        <a href="https://www.facebook.com/shivam.grover.94/" target="_blank"                       ><BsFacebook /></a>
    </div>
  )
}

export default headerSocials