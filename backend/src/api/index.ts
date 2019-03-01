import { Router } from 'express';
import articles from './articles';

const routes = Router();

routes
  .use('/articles', articles);


export default routes;
