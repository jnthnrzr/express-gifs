const data = require('./short');

const getGifs = jest.fn(() => {
  Promise.resolve({ data });
});

module.exports = {
  getGifs,
};
