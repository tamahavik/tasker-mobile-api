import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import BaseRoute from './BaseRoute';

class AuthRoute extends BaseRoute {
  routes(): void {
    this.router.post('/login', AuthController.login);
    this.router.post('/register', AuthController.register);
  }

  public static getInstance(): Router {
    return new AuthRoute().router;
  }
}

export default AuthRoute.getInstance();
