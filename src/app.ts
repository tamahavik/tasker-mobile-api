import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import dotenv from 'dotenv';
import express, { Application, Request, Response } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import Connection from './db/Connection';

//Router
import AuthRoute from './routers/AuthRoute';
import UserRoutes from './routers/UserRoute';

export class App {
  private app: Application;
  private db: Connection;

  constructor() {
    dotenv.config();
    this.app = express();
    this.db = Connection.getInstance();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    this.app.use(morgan('dev'));
    this.app.use(bodyParser.json());
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.route('/ping').get((req: Request, res: Response) => {
      res.send('pong');
    });
    this.app.use('/api/v1/users', UserRoutes);
    this.app.use('/api/v1/auth', AuthRoute);
  }

  public listen(): void {
    this.app.listen(process.env.PORT, () => {
      console.log('Application running in port ' + process.env.PORT);
    });
    this.db.testConnection();
  }
}
