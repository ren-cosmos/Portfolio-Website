import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {MdWork} from 'react-icons/md'
import {BsTrophy} from 'react-icons/bs'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about image" className='about__me-image-specific'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <MdWork className='about__icon'/>
              <h5>Experience</h5>
              <small>1 year Work</small>
            </article>
            <article className='about__card'>
              <BsTrophy className='about__icon'/>
              <h5>Achievements</h5>
              <small>3 Academic Awards</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt aperiam mollitia vero, pariatur debitis optio non esse est iure, itaque at, labore facilis quasi eaque doloribus explicabo modi repellat ab.</p>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about