// utils.js: utility functions
const axios = require('axios');

/**
 * Build url with apiKey
 * @param {string} apiKey - API Key provided by Giphy
 * @returns {string} URL to get Gif Objects
 */
const getUrl = apiKey => {
  return `http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
};

/**
 *
 * @param {string} url - URL to get Gif Objects
 * @param {object} params - Parameters to modify request
 */
const loadData = (url, params) => {
  return axios.get(url, { params }).then(result => result.data);
};

module.exports = {
  getUrl,
  loadData,
};
