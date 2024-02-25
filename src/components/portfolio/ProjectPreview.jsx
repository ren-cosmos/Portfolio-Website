import React, {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import './ProjectPreview.css';
import Amazon from "./amazon-clone";

const ProjectPreview = ({projects}) => {
    const {projectId} = useParams();
    const project = projects.find((project) => project.id === parseInt(projectId));

    useEffect(() => {
        // Scroll to the top of the page when a new project is loaded
        window.scrollTo(0, 0);
    }, [project]);

    if (!project) {
        return <div>Project not found</div>;
    } else if (project.title === 'Amazon Clone') {
        return <Amazon project={project}/>;
    }
};

export default ProjectPreview;