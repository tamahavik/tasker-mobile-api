import { Request, Response } from 'express';
import IController from './IController';

let data = [
  { id: 1, name: 'a' },
  { id: 2, name: 'b' },
  { id: 3, name: 'c' },
  { id: 4, name: 'd' },
  { id: 5, name: 'e' },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    return res.send(data);
  }
  show(req: Request, res: Response): Response {
    return res.send('from user controller show fn');
  }
  create(req: Request, res: Response): Response {
    const { name } = req.body;
    const result = { id: Date.now(), name };
    data.push(result);
    return res.send({ id: result.id });
  }
  update(req: Request, res: Response): Response {
    return res.send('from user controller update fn');
  }
  delete(req: Request, res: Response): Response {
    return res.send('from user controller delete fn');
  }

  public static getInstance() {
    return new UserController();
  }
}

export default UserController.getInstance();
