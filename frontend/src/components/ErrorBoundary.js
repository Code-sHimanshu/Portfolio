import React from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
    padding: 2rem;
    margin: 1rem;
    background: #fff3f3;
    border: 1px solid #ff0000;
    border-radius: 5px;
`;

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <ErrorContainer>
                    <h2>Something went wrong!</h2>
                    <p>{this.state.error.message}</p>
                </ErrorContainer>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary; 