require('../config');

import bodyParser from 'body-parser';
import express from 'express';
import errorMiddlware from './middlewares/error';
import api from './api';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api);
app.use(errorMiddlware);

app.listen(
    port,
    () => console.log(`Express web app available at localhost:${port} with env: ${process.env.NODE_ENV}`)
);
