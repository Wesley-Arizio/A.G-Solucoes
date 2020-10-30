import { Router } from 'express';

import LendersController from './controller/lendersController';
import UserController from './controller/userController';
import AuthController from './controller/authController';

import auth from './middleware/auth';

const routes  = Router();

routes.post('/lenders', LendersController.create);

routes.get('/lenders', LendersController.index);

routes.get('/lender/:id', LendersController.show);

routes.post('/user', UserController.createAccount);

routes.get('/user/auth', AuthController.authenticate);

routes.use(auth);


export default routes;