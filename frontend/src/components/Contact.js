import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContactSection = styled.section`
    padding: 5rem 2rem;
`;

const ContactForm = styled.form`
    max-width: 600px;
    margin: 0 auto;
`;

const FormGroup = styled.div`
    margin-bottom: 1.5rem;
`;

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/contact', formData);
            alert('Message sent successfully!');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            alert('Error sending message');
        }
    };

    return (
        <ContactSection>
            <h2>Contact Me</h2>
            <ContactForm onSubmit={handleSubmit}>
                <FormGroup>
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                    />
                </FormGroup>
                <FormGroup>
                    <textarea
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        required
                    />
                </FormGroup>
                <button type="submit">Send Message</button>
            </ContactForm>
        </ContactSection>
    );
};

export default Contact; 