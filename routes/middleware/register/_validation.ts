import { body, ValidationChain } from 'express-validator/check';

const JoinValidation: ValidationChain[] = [body('id').isString(), body('password').isString(), body('name').isString()];

export default JoinValidation;
