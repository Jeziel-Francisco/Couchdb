import * as express from 'express';
import * as morgan from 'morgan';
import { UserRoutes } from './routes/routes';
import * as bodyParser from 'body-parser';


class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.middleware(this.app);
        this.routes(this.app);
    }

    middleware(app: express.Application) {
        app.use(morgan('dev'));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
    }

    routes(app: express.Application) {
        UserRoutes(app);
    }
}

export default new App().app;