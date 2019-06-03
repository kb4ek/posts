import { body, ValidationChain } from 'express-validator/check';

import { id, password } from '../../../../config/regexp.json';

const LoginValidation: ValidationChain[] = [
  body('id')
    .isString()
    .matches(id),
  body('password')
    .isString()
    .matches(password),
];

export default LoginValidation;
