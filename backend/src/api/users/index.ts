import { Router } from 'express';
import passport from 'passport';
import { isAuth, validate } from '../middlewares';
import validation from './validation';
import controllers from './controllers';

const router = Router();

router
  .get(
    '/',
    isAuth,
    controllers.getItem
  )
  .get(
    '/logout',
      isAuth,
    controllers.logout
  )
  .post(
    '/',
    validate(validation.createItem),
    controllers.createItem
  )
  .patch(
    '/',
    validate(validation.patchItem),
    controllers.patchItem
  )
  .post(
    '/login',
    passport.authenticate('local', {}),
    controllers.login
  );

export default router;
