import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const projectService = {
    getAllProjects: async () => {
        try {
            const response = await axios.get(`${API_URL}/projects`);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    },

    addProject: async (projectData) => {
        try {
            const response = await axios.post(`${API_URL}/projects`, projectData);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
};

export const contactService = {
    sendMessage: async (messageData) => {
        try {
            const response = await axios.post(`${API_URL}/contact`, messageData);
            return response.data;
        } catch (error) {
            throw error.response.data;
        }
    }
}; 