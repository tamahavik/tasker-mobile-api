import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import helmet from 'helmet';
import compression from 'compression';
import cors from 'cors';
import morgan from 'morgan';

//Router
import UserRoutes from './routers/UserRoute';
import AuthRoute from './routers/AuthRoute';

export class App {
  private app: Application;

  constructor() {
    dotenv.config();
    this.app = express();
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
  }
}
