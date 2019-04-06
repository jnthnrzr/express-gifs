// app.js
const express = require('express');

const { getGifs, sayHello } = require('./routeHandlers');

const app = express();

app.get('/', sayHello);

app.get('/api/gifs', getGifs);

module.exports = app;
