import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import User from '../model/users';

export default {
    async authenticate(request:Request, response: Response) {
        const userRepository = getRepository(User);

        const { email, password } = request.body;

        const user = await userRepository
            .createQueryBuilder('user')
            .where("user.email = :email", { email: email })
            .getOne();

        if(!user){
            return response.status(401).send({
                message: "Invalid credentials"
            });
        }

        const isValidPassword = await bcrypt.compare( 
            password,
            user.password
        );

        if(!isValidPassword){
            return response.status(401).send({
                message: "Invalid credentials"
            });
        }

        const token = jwt.sign({ id: user.id }, `${process.env.TOKEN_SECRET_KEY}`, {expiresIn: '1d'});

        return response.json({
            user,
            token,
        });
    }
}