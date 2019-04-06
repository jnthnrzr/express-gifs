const request = require('supertest');
const app = require('../src/app');

describe('Test express app', () => {
  test('GET / should emit a HTTP 200', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });

  test('GET / has `application/json` as Content-Type', () => {
    return request(app)
      .get('/')
      .expect('Content-Type', /application\/json/);
  });

  test('GET / should return a greeting as message', () => {
    const expectedText = JSON.stringify({ message: 'Hello World!' });
    return request(app)
      .get('/')
      .then(response => {
        expect(response.text).toBe(expectedText);
      });
  });
});
