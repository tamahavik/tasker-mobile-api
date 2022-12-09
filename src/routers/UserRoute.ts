import { Router } from 'express';
import BaseRoute from './BaseRoute';
import UserController from '../controllers/UserController';

class UserRoute extends BaseRoute {
  public routes(): void {
    this.router.get('/', UserController.index);
    this.router.post('/', UserController.create);
    this.router.get('/:id', UserController.show);
    this.router.put('/:id', UserController.update);
    this.router.delete('/:id', UserController.delete);
  }

  public static getInstance(): Router {
    return new UserRoute().router;
  }
}

export default UserRoute.getInstance();
