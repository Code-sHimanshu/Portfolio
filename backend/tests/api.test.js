const request = require('supertest');
const app = require('../server');

describe('API Tests', () => {
  // Projects API Tests
  test('GET /api/projects', async () => {
    const response = await request(app).get('/api/projects');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });

  // Contact API Tests
  test('POST /api/contact', async () => {
    const response = await request(app).post('/api/contact').send({
      name: 'Test User',
      email: 'test@test.com',
      message: 'Test message'
    });
    expect(response.status).toBe(200);
  });
}); 