import bcrypt from 'bcrypt';

class PasswordHash {
  public static hash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };

  public static compare = (
    password: string,
    hash: string
  ): Promise<boolean> => {
    return bcrypt.compare(password, hash);
  };
}

export default PasswordHash;
