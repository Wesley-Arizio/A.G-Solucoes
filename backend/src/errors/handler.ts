import { ErrorRequestHandler } from 'express';
import { ValidationError } from 'yup';

interface ValidationErrors {
    [key: string]: Array<string>
}

const errorHandler: ErrorRequestHandler = (error, reqeust, response, next) => {
    if(error instanceof ValidationError){
        let errors: ValidationErrors = {};
        error.inner.map(err => {
            errors[err.path] = err.errors;
        });

        return response.status(400).send({message: "Validation fails", errors});
    }

    console.error(error);

    return response.status(500).json({message: 'Internal server error.'});
}

export default errorHandler;