import { Request, Response } from 'express';
import Users from '../db/models/Users';
import PasswordHash from '../utils/PasswordHash';
import jwt from '../utils/JwtToken';

class AuthController {
  public async login(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    const userLogin = await Users.findOne({
      where: {
        username: username,
      },
    });

    if (!userLogin) {
      return res.status(401).json({
        status: 401,
        message: 'Unauthorize',
      });
    }

    if (!(await PasswordHash.compare(password, userLogin.password))) {
      return res.status(401).json({
        status: 401,
        message: 'Unauthorize',
      });
    }

    const token = jwt.generateToken(
      userLogin.id,
      userLogin.username,
      userLogin.password
    );

    return res.status(200).json({
      id: userLogin.id,
      username: userLogin.username,
      token,
    });
  }

  public async register(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;
    const hashedPassword = await PasswordHash.hash(password);

    const createdUsers = await Users.create({
      username,
      password: hashedPassword,
    });

    return res.status(200).json({
      id: createdUsers.id,
      username: createdUsers.username,
    });
  }

  public static getInstance(): AuthController {
    return new AuthController();
  }
}

export default AuthController.getInstance();
