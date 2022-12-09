import { Request, Response } from 'express';

class AuthController {
  public login(req: Request, res: Response): Response {
    return res.send('login');
  }

  public register(req: Request, res: Response): Response {
    return res.send('register');
  }

  public static getInstance(): AuthController {
    return new AuthController();
  }
}

export default AuthController.getInstance();
