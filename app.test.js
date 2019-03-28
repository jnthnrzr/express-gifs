const request = require('supertest');
const app = require('./app').app;

describe('Test express app', () => {
  test('GET / should emit a HTTP 200', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.status).toBe(200);
      });
  });

  test('GET / has text as Content-Type', () => {
    return request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /text/);
  });

  test('GET / should return a text greeting', () => {
    return request(app)
      .get('/')
      .then(response => {
        expect(response.text).toBeTruthy();
        expect(response.text).toBe('Hello World!');
      });
  });
});
