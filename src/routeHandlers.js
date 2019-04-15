const { getUrl, loadData } = require('./utils');

// get trending gifs from Giphy
const getGifs = (request, response) => {
  const apiKey = process.env.API_KEY;
  const params = request.query;
  const url = getUrl(apiKey);
  return loadData(url, params)
    .then(data => response.status(200).json(data))
    .catch(error => response.status(500).json(error));
};

module.exports = getGifs;
