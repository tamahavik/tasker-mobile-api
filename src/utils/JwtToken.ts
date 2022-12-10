import jwt, { JwtPayload } from 'jsonwebtoken';

class JwtToken {
  public static generateToken = (
    id: number,
    username: string,
    password: string
  ): string => {
    const secretKey: string = process.env.JWT_SECRET_KEY || 'secret';
    const token = jwt.sign({ id, username, password }, secretKey);
    return token;
  };

  public static verifyToken = (token: string): string | JwtPayload => {
    const secretKey: string = process.env.JWT_SECRET_KEY || 'secret';
    return jwt.verify(token, secretKey);
  };
}

export default JwtToken;
