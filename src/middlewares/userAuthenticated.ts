import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../configs/auth';

import AppError from '../shared/error/AppError';

interface ITokenPayload {
    firstName: string;
    lastName: string;
    iat: number;
    exp: number;
    sub: string;
}

export default function userAuthenticated(
    req: Request,
    res: Response,
    next: NextFunction
): void {

    const authHeader =  req.headers.authorization;
    
    if (!authHeader) {
        throw new AppError('Não foi enviado o JWT', 401);
    }

    const [, token] = authHeader.split(' ');

    try {
        const decoted = verify(token, authConfig.jwt.secret);

        const { sub, firstName, lastName } = decoted as ITokenPayload;
        
        req.user = {
            id: sub,
            firstName,
            lastName
        };

        return next();

    } catch(e) {
        console.error(e);
        throw new AppError('token JWT inválido', 401)
    }


}