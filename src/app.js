// app.js
const express = require('express');
const cors = require('cors');

const { getGifs, sayHello } = require('./routeHandlers');

const app = express();

app.use(cors());

app.get('/', sayHello);

app.get('/api/gifs', getGifs);

module.exports = app;
