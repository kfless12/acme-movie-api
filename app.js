const express = require('express');

const app = express();
const { models } = require('./db');

module.exports = app;

app.get('/', (req, res, next) => {
  res.send(`
    <html>
        <body>
            The Acme API
        </body>
    </html>
        `);
});

app.get('/api/movies', async (req, res, next) => {
  try {
    res.send(await models.Movie.findAll());
  } catch (error) {
    next(error);
  }
});

app.get('/api/actors', async (req, res, next) => {
  try {
    res.send(await models.Actor.findAll());
  } catch (error) {
    next(error);
  }
});
