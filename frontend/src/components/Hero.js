import React from 'react';
import styled from 'styled-components';

const HeroSection = styled.section`
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: #f5f5f5;
`;

const Hero = () => {
    return (
        <HeroSection>
            <div>
                <h1>Your Name</h1>
                <h2>Full Stack Developer</h2>
                <p>Building amazing web experiences</p>
            </div>
        </HeroSection>
    );
};

export default Hero; 