import { Router, Request, Response } from 'express';
import LendersController from './controller/lendersController';


const routes  = Router();

routes.post('/lenders', LendersController.create);

routes.get('/lenders', LendersController.index);

routes.get('/lender/:id', LendersController.show);

export default routes;