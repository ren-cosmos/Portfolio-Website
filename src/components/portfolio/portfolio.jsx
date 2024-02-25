import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5/portfolio5.png'
import IMG6 from '../../assets/portfolio6/portfolio6.jpg'

import {Link} from 'react-router-dom';

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'Amazon Clone',
        description: 'This project replicates the core functionalities of the popular online marketplace Amazon',
        demo: '/preview/1',
        technicalStack: ['HTML', 'Tailwind CSS', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Node.js', 'MongoDB', 'JWT']
    },
    {
        id: 2,
        image: IMG2,
        title: 'HealthMate',
        description: 'A healthcare platform designed to bridge the gap between patients and healthcare professionals.',
        github: 'https://github.com/sgrover360/health_mate',
        demo: '',
        technicalStack: []
    },
    {
        id: 3,
        image: IMG3,
        title: 'My Portfolio Website',
        description: 'My digital portfolio showcasing my creative work, skills, projects and achievements.',
        github: 'https://github.com/ren-cosmos/Portfolio-Website',
        demo: 'https://portfolio-website-jet-zeta.vercel.app/',
        technicalStack: []
    },
    {
        id: 4,
        image: IMG4,
        title: 'Cosmic Dance School',
        description: 'A website for a dance school built with HTML, CSS, and JavaScript.',
        github: 'https://github.com/ren-cosmos/Cosmic-Dance-School',
        demo: '',
        technicalStack: []
    },
    // {
    //   id: 5,
    //   image: IMG5,
    //   title: 'Project 5',
    //   github: '',
    //   demo: ''
    // },
    // {
    //   id: 6,
    //   image: IMG6,
    //   title: 'Project 6',
    //   github: '',
    //   demo: ''
    // }
]

const portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                {/* DYNAMICALLY GENERATING PROJECTS */}
                {
                    data.map(({id, image, title, description, github, demo}) => {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <p>{description}</p>
                                <div className="portfolio__item-cta">
                                    <a href={github} className='btn' target='_blank'
                                       rel="noopener noreferrer">Github</a>
                                    {demo ? demo.startsWith('http') ? (
                                        <Link to={demo} className='btn btn-primary'>Live Demo</Link>
                                    ) : (
                                        <Link to={demo} className='btn btn-primary'>Preview</Link>
                                    ) : (<span className='btn-disabled'>Coming Soon</span>)}
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default portfolio