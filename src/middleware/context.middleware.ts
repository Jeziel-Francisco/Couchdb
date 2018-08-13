import * as Nano from 'nano';
import { Request, Response, NextFunction } from 'express';

const nano = Nano('http://jeziel:010065363je@localhost:5984');
const db = nano.db.use(process.env.DATABASE || 'test');

class Context {
    constructor() { }

    setContext(req: Request, res: Response, next: NextFunction) {
        req['context'] = db;
        next();
    }
}

export default new Context();