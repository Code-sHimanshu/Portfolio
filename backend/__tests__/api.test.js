const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');

// टेस्ट से पहले और बाद में क्लीनअप
beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI);
});

afterAll(async () => {
    await mongoose.connection.close();
});

describe('API Tests', () => {
    test('GET /api/projects should return array', async () => {
        const response = await request(app)
            .get('/api/projects');
        
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBeTruthy();
    });

    test('POST /api/contact should work', async () => {
        const response = await request(app)
            .post('/api/contact')
            .send({
                name: 'Test User',
                email: 'test@test.com',
                message: 'Test message'
            });
        
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Email sent successfully');
    });
}); 