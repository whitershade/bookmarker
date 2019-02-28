const { Router } = require('express');
const articles = require('./articles/index');

const routes = Router();

routes
  .use('/articles', articles);


module.exports = routes;