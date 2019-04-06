// const axios = require('axios');
const dotenv = require('dotenv');

const { getUrl, loadData, simplifyData } = require('./utils');

dotenv.config();

// say a greeting
const sayHello = (request, response) => {
  const message = 'Hello World!';
  response.status(200).send({ message });
};

// get trending gifs from Giphy
const getGifs = (request, response) => {
  const apiKey = process.env.API_KEY;
  const offset = request.query.offset;
  const url = getUrl(apiKey, offset);
  return loadData(url)
    .then(gifObject => simplifyData(gifObject.data))
    .then(data => response.status(200).json(data))
    .catch(error => console.log(error));
};

module.exports = {
  sayHello,
  getGifs,
};
