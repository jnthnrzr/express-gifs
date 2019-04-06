const data = require('./data');

module.exports = {
  get: jest.fn(() => Promise.resolve({ data })),
};
