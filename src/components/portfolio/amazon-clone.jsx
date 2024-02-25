import React from 'react';
import './ProjectPreview.css';

const Amazon = ({project}) => {
    return (
        <div>
            <div className="project-preview">
                <div className="project-preview__video">
                    <video autoPlay loop controls>
                        <source src={project.videos[0]} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                    <div className="project-preview__links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                <div className="project-preview__details">
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="project-preview__tech-stack">
                        <p className="project-preview__tech-stack-title">Technical Stack:</p>
                        <ul>
                            {project.technicalStack.map((tech, index) => (<li key={index}>{tech}</li>))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="project-preview">
                <div className="project-preview__details">
                    <h2>Home Page</h2>
                    <p>The homepage welcomes users with a modern and user-friendly interface, featuring a prominent carousel highlighting featured products. Designed with React.js, the homepage offers seamless navigation, showcasing a diverse range of product categories. Users can explore the latest products in women's clothing, shoes, beauty, and kids' items through interactive sliders. Each category section presents a curated selection of products with captivating images, enticing users to click for more details.</p>
                </div>
                <div className="project-preview__video">
                    <video autoPlay loop controls>
                        <source src={project.videos[1]} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <div className="project-preview">
                <div className="project-preview__video">
                    <video autoPlay loop controls>
                        <source src={project.videos[2]} type="video/webm"/>
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="project-preview__details">
                    <h2>Product Page</h2>
                    <p>The product page provides a detailed view of each product. Users can easily browse through product images, descriptions, prices, and available variants. Dynamic features such as image carousels, interactive color selection, and size options enhance user engagement. Customers can add items to their cart, view related products, and proceed to checkout with ease.</p>
                </div>
            </div>
        </div>);
};

export default Amazon;
