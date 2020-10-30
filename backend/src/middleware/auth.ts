import { Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

interface TokenPayload { 
    id: string,
    iat: number,
    exp: number
}

export default function authMiddleWare(request: Request, response: Response, next: NextFunction) {

    const { authorization } = request.headers;

    if(!authorization) {
        return response.status(401).send({
            message: "You are not authorized"
        });
    }

    const token = authorization.replace('Bearer', '').trim();

    const data = jwt.verify(token, `${process.env.TOKEN_SECRET_KEY}`);

    const { id } = data as TokenPayload;

    request.userId = id;

    return next();
}