import { Sequelize } from 'sequelize-typescript';

class Connection {
  public db: Sequelize;

  private constructor() {
    this.db = new Sequelize({
      dialect: 'postgres',
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      logging: false,
      models: [__dirname + '/models'],
    });
  }

  public async testConnection(): Promise<void> {
    try {
      await this.db.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  public static getInstance(): Connection {
    return new Connection();
  }
}

export default Connection;
