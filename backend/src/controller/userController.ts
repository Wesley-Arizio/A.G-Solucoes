import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import User from '../model/users';
import Lender from '../model/lenders';

export default {
    async createAccount(request: Request, response: Response) {
        const {
            name,
            email,
            password
        } = request.body;

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            email: Yup.string().email().required(),
            password: Yup.string().min(6).max(16).required()
        });

        await schema.validate({
            name,
            email,
            password
        }, { abortEarly: false });

        const userRepository = getRepository(User);

        const userExists = await userRepository
            .createQueryBuilder('user')
            .where("user.email = :email", { email: email })
            .getOne()

        if(userExists){
            return response.status(401).send({
                message: "Invalid credentials"
            });
        }

        const user = new User();
        user.name = name;
        user.email = email;
        user.password = password;
    

        await userRepository.save(user);

        const token = jwt.sign({ id: user.id }, `${process.env.TOKEN_SECRET_KEY}`, {expiresIn: '1d'});

        const userToReturn = {
            ...user,
            password: undefined
        }

        return response.status(201).send({ 
            token,
            userToReturn
        });
    }
}