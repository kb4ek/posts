import { body, ValidationChain } from 'express-validator/check';

const LoginValidation: ValidationChain[] = [body('id').isString(), body('password').isString()];

export default LoginValidation;
