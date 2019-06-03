import { body, ValidationChain } from 'express-validator/check';

import { comment } from '../../../../config/regexp.json';

const commentValidation: ValidationChain[] = [
  body('comment')
    .isString()
    .matches(comment),
];

export default commentValidation;
