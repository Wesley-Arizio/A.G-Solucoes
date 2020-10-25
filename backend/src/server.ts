import express from 'express';
import cors from 'cors';
import './database/connection';
import 'express-async-errors';

import errorHandler from './errors/handler';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errorHandler);

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});