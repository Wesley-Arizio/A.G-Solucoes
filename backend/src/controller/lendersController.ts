import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import * as Yup from 'yup';

import Lender from '../model/lenders';
import lendersView from '../views/lendersView';

export default {

    async index(request: Request, response: Response){
        const lenderRepository = getRepository(Lender);

        const lenders = await lenderRepository.find();

        return response.status(200).json(lendersView.renderMany(lenders));
    },

    async show(request: Request, response: Response){
        const { id }= request.params;

        const lenderRepository = getRepository(Lender);

        const lender = await lenderRepository.findOneOrFail(id);

        return response.status(200).json(lendersView.render(lender));
    },

    async create(request: Request, response: Response){

        const lender = request.body as Lender;

        const lenderRepository = getRepository(Lender);

        const schema = Yup.object().shape({
            name: Yup.string().required(),
            latitude: Yup.number().required(),
            longitude: Yup.number().required(),
            min_price: Yup.number().required(),
            max_price: Yup.number().required(),
            consequences: Yup.string().required().max(500),
            contact: Yup.number().required()
        });

        await schema.validate(lender, {abortEarly: false});

        console.log(lender);

        const createLender = lenderRepository.create(lender);

        await lenderRepository.save(createLender);
    
        return response.status(201).send({createLender});
    }
}