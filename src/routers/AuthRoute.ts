import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import BaseRoute from './BaseRoute';
import { auth } from '../middlewares/AuthMiddleware';
import authValidator from '../middlewares/AuthValidator';

class AuthRoute extends BaseRoute {
  routes(): void {
    this.router.post('/login', authValidator, AuthController.login);
    this.router.post('/register', authValidator, AuthController.register);
  }

  public static getInstance(): Router {
    return new AuthRoute().router;
  }
}

export default AuthRoute.getInstance();
