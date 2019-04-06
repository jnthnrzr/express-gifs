// utils.js: utility functions
const axios = require('axios');

// build Url with apiKey and offset
const getUrl = (apiKey, offset) => {
  return `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&offset=${offset}`;
};

// get simple array of { id, title } object from data
const simplifyData = data => {
  return data
    .filter(datum => datum.id && datum.title)
    .map(({ id, title }) => ({ id, title }));
};

const loadData = url => {
  return axios
    .get(url)
    .then(result => result.data)
    .catch(error => console.log(error));
};

module.exports = {
  getUrl,
  loadData,
  simplifyData,
};
