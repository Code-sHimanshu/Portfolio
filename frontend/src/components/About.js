import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
    padding: 5rem 2rem;
    background: white;
`;

const AboutContent = styled.div`
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
`;

const About = () => {
    return (
        <AboutSection>
            <AboutContent>
                <h2>About Me</h2>
                <p>
                    I am a passionate full-stack developer with experience in 
                    building web applications using modern technologies.
                </p>
                <p>
                    My goal is to create efficient, scalable, and user-friendly 
                    applications that solve real-world problems.
                </p>
            </AboutContent>
        </AboutSection>
    );
};

export default About; 