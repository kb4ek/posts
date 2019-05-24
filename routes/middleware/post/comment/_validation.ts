import { body, ValidationChain } from 'express-validator/check';

const commentValidation: ValidationChain[] = [body('comment').isString()];

export default commentValidation;
