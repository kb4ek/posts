import { body, ValidationChain } from 'express-validator/check';

const validation: ValidationChain[] = [body('id').isString(), body('password').isString(), body('name').isString()];

export default validation;
