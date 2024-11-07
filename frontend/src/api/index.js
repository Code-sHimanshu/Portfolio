const API_URL = 'http://localhost:5000/api';

export const loginUser = async (credentials) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials)
        });
        return await response.json();
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}; 