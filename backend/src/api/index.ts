import { Router } from 'express';
import articles from './articles';
import users from './users';

const routes = Router();

routes
  .use('/articles', articles)
  .use('/users', users);


export default routes;
