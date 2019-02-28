require('./config');

const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api);

app.use((err, req, res, next) => {
  console.error('Error occurred:', err);
  res.status(400).send({ message: err && err.message || err });
});

app.listen(port, () => console.log(`Express web app available at localhost:${port} with env: ${process.env.NODE_ENV}`));
