import { Request, Response } from "express";

import Business from './business';
import { onSuccessResponse, onErrorResponse } from "../../utils/utils";
import { DocumentInsertResponse } from 'nano';

class Controller {
    constructor() { }
    async findAll(req: Request, res: Response) {
        try {
            let data = await Business.findAll(req['context']);
            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async create(req: Request, res: Response) {
        try {
            let data: DocumentInsertResponse = await Business.create(req['context'], req.body);
            req.body['_id'] = data.id;
            req.body['_rev'] = data.rev;
            onSuccessResponse(res, req.body);
        } catch (error) {
            onErrorResponse(res, error);
        }
    }

    async auth(req: Request, res: Response) {
        try {
            let data = await Business.auth(req['context'], req.body);

            onSuccessResponse(res, data);
        } catch (error) {
            onErrorResponse(res, error);
        }

    }
}

export default new Controller();