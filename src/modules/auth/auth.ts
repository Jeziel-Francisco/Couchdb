import * as jwt from 'jsonwebtoken';

import { JWT_SECRET, onErrorResponse } from './../../utils/utils';
import { Request, Response, NextFunction } from 'express';


export const Sign = (payload: any): string => {
    return jwt.sign(payload, JWT_SECRET);
}

export const Verify = (req: Request, res: Response, next: NextFunction) => {
    let authorization = req.headers.authorization || 'Bearer ';
    let token = authorization.slice(7, authorization.length) as string;
    try {
        jwt.verify(token, JWT_SECRET);
        next();
    } catch (error) {
        onErrorResponse(res, error);
    }
}

export const PropertyToken = (req: Request): { sub: number, company: [number], iat: any } => {
    let authorization = req.headers.authorization;
    let token = authorization.slice(7, authorization.length) as string;
    return jwt.verify(token, JWT_SECRET) as { sub: number, company: [number], iat: any };
}