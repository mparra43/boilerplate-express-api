const express = require('express');
const usersRouter = require('./users.router');
const notesRouter = require('./notes.router');


function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
  router.use('/notes', notesRouter);
}

module.exports = routerApi;
