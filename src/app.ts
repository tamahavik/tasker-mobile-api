import express, { Application, Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

export class App {
  private app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
  }

  protected plugins(): void {
    dotenv.config();
    this.app.use(bodyParser.json());
  }

  protected routes(): void {
    this.app.route('/ping').get((req: Request, res: Response) => {
      res.send('pong');
    });
    this.app.route('/users').post((req: Request, res: Response) => {
      res.send(req.body);
    });
  }

  public listen(): void {
    this.app.listen(process.env.PORT, () => {
      console.log('Application running in port ' + process.env.PORT);
    });
  }
}
