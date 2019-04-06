const data = require('./data');

const loadData = jest.fn(() => {
  Promise.resolve({ data });
});

module.exports = {
  loadData,
};
