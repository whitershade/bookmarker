import { Router } from 'express';
import * as controllers from './controllers';

const router = Router();

router
  .get(
    '/',
    controllers.getItems
  )
  .get(
    '/:id',
    controllers.getItem
  )
  .post(
    '/',
    controllers.createItem
  )
  .patch(
    '/:id',
    controllers.patchItem
  )
  .delete(
    '/:id',
    controllers.deleteItem
  );


export default router;