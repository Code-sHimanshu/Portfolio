import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProjectsSection = styled.section`
    padding: 5rem 2rem;
`;

const ProjectGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
`;

const ProjectCard = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    padding: 1rem;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-5px);
    }
`;

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };
        fetchProjects();
    }, []);

    return (
        <ProjectsSection>
            <h2>My Projects</h2>
            <ProjectGrid>
                {projects.map((project) => (
                    <ProjectCard key={project._id}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div>
                            {project.technologies.map((tech) => (
                                <span key={tech}>{tech}</span>
                            ))}
                        </div>
                    </ProjectCard>
                ))}
            </ProjectGrid>
        </ProjectsSection>
    );
};

export default Projects; 