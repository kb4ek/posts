import { body, ValidationChain } from 'express-validator/check';

const changePasswordValidation: ValidationChain[] = [body('password').isString()];

export default changePasswordValidation;
