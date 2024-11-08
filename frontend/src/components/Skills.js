import React from 'react';
import styled from 'styled-components';

const SkillsSection = styled.section`
    padding: 5rem 2rem;
    background: #f9f9f9;
`;

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
`;

const SkillCard = styled.div`
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    text-align: center;
`;

const Skills = () => {
    const skillsList = [
        { name: 'Frontend', items: ['React', 'HTML', 'CSS', 'JavaScript'] },
        { name: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
        { name: 'Tools', items: ['Git', 'VS Code', 'Postman'] },
    ];

    return (
        <SkillsSection>
            <h2>My Skills</h2>
            <SkillsGrid>
                {skillsList.map((category) => (
                    <SkillCard key={category.name}>
                        <h3>{category.name}</h3>
                        <ul>
                            {category.items.map((skill) => (
                                <li key={skill}>{skill}</li>
                            ))}
                        </ul>
                    </SkillCard>
                ))}
            </SkillsGrid>
        </SkillsSection>
    );
};

export default Skills; 