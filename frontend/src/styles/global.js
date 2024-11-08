import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Arial', sans-serif;
        line-height: 1.6;
    }

    h1, h2, h3 {
        margin-bottom: 1rem;
    }

    button {
        cursor: pointer;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 5px;
        background: #007bff;
        color: white;
        
        &:hover {
            background: #0056b3;
        }
    }
`;

export default GlobalStyle; 