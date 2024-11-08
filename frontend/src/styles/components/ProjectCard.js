import styled from 'styled-components';

export const Card = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    padding: 1.5rem;
    transition: transform 0.3s ease;

    @media (max-width: 768px) {
        padding: 1rem;
    }

    &:hover {
        transform: translateY(-5px);
    }
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
`;

export const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 1rem;
`; 