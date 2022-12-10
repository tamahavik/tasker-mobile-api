import { Request, Response, NextFunction } from 'express';
import jwt from '../utils/JwtToken';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).send('Unauthorize');
  }

  const bearerToken = req.headers.authorization.split(' ');

  if (bearerToken[0] && bearerToken[0] !== 'Bearer') {
    return res.status(401).send('Unauthorize');
  }

  try {
    const credential = jwt.verifyToken(bearerToken[1]);

    if (!credential) {
      return res.status(401).send('Unauthorize');
    }
    next();
  } catch (error) {
    return res.status(401).send('Unauthorize');
  }
};
