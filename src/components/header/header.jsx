import React from 'react'
import './header.css'
import CTA from './CTA.jsx'
import ME from '../../assets/profile.png'
import HeaderSocials from './headerSocials.jsx'

const header = () => {
  return (
    <header>

      <div className="container header__container">

        {/* Introduction */}
        <h5>Hello I'm</h5>
        <h1>Shivam Grover</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />

        {/* Image */}
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        {/* Scroll Down */}
        <a href="#contact" className='scroll__down'>Scroll Down</a>

      </div>
    </header>
  )
}

export default header