import { Router } from 'express';
import * as controllers from './controllers';
import { isAuth } from '../middlewares';

const router = Router();

router
  .get(
    '/',
      isAuth,
    controllers.getItems
  )
  .get(
    '/:id',
      isAuth,
    controllers.getItem
  )
  .post(
    '/',
      isAuth,
    controllers.createItem
  )
  .patch(
    '/:id',
      isAuth,
    controllers.patchItem
  )
  .delete(
    '/:id',
      isAuth,
    controllers.deleteItem
  );


export default router;