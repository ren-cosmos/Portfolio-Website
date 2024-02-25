import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header.jsx';
import Nav from './components/nav/Nav.jsx';
import About from './components/about/about.jsx';
import Experience from './components/experience/experience.jsx';
import Services from './components/services/services.jsx';
import Portfolio from './components/portfolio/portfolio.jsx';
import Testimonials from './components/testimonials/testimonials.jsx';
import Contact from './components/contact/contact.jsx';
import Footer from './components/footer/footer.jsx';
import ProjectPreview from './components/portfolio/ProjectPreview';
import PORTFOLIO_1_OVERVIEW from "./assets/portfolio1/portfolio1.webm";
import PORTFOLIO_1_HOME_PAGE from "./assets/portfolio1/home-page.webm";
import PORTFOLIO_1_PRODUCT_PAGE from "./assets/portfolio1/product-page.webm";
import IMG2 from "./assets/portfolio2/portfolio2.jpg";
import IMG3 from "./assets/portfolio3/portfolio3.jpg";
import IMG4 from "./assets/portfolio4/portfolio4.jpg";
import ScrollingWebpage from "./components/portfolio/ScrollingWebpage";

const data = [
    {
        id: 1,
        videos: [PORTFOLIO_1_OVERVIEW, PORTFOLIO_1_HOME_PAGE, PORTFOLIO_1_PRODUCT_PAGE],
        title: 'Amazon Clone',
        description: 'This project replicates the core functionalities of the popular online marketplace Amazon, allowing users to browse products, add items to cart, and complete orders. The application features a responsive and intuitive user interface, with real-time product search and dynamic product listings. Users can register, login, and securely checkout using payment integration. Admin functionalities include product management, order tracking, and user analytics.',
        github: 'https://github.com/ren-cosmos/Portfolio-Website',
        demo: '/preview/1',
        technicalStack: ['HTML', 'Tailwind CSS', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Node.js', 'MongoDB', 'JWT']
    },
    {
        id: 2,
        image: IMG2,
        title: 'HealthMate',
        description: 'A health tracking app.',
        github: '',
        demo: '/preview/2',
        technicalStack: []
    },
    {
        id: 3,
        image: IMG3,
        title: 'My Portfolio Website',
        description: 'My personal portfolio website built with React and styled-components.',
        github: 'https://github.com/ren-cosmos/Portfolio-Website',
        // demo: 'https://portfolio-website-jet-zeta.vercel.app/'
        demo: '/preview/3',
        technicalStack: []
    },
    {
        id: 4,
        image: IMG4,
        title: 'Cosmic Dance School',
        description: 'A website for a dance school built with HTML, CSS, and JavaScript.',
        github: 'https://github.com/ren-cosmos/Cosmic-Dance-School',
        demo: '/preview/4',
        technicalStack: []
    },
    // {
    //     id: 5,
    //     image: IMG5,
    //     title: 'Project 5',
    //     github: '',
    //     demo: '',
    //     technicalStack: []
    // },
    // {
    //     id: 6,
    //     image: IMG6,
    //     title: 'Project 6',
    //     github: '',
    //     demo: '',
    //     technicalStack: []
    // }
]

const App = () => {
    return (
        <Router>
            <>
                <Routes>
                    <Route path="/" element={<>
                        <Header/>
                        <Nav/>
                        <About/>
                        <Experience/>
                        {/*<Services />*/}
                        <Portfolio/>
                        <Testimonials/>
                        <Contact/>
                    </>}/>
                    <Route path="/preview/:projectId" element={<>
                        <ProjectPreview projects={data}/>
                        {/*<ScrollingWebpage/>*/}
                    </>}/>
                </Routes>
                <Footer/>
            </>
        </Router>
    );
};

export default App;
