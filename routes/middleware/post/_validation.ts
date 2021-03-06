import { body, ValidationChain } from 'express-validator/check';

import { title, content } from '../../../config/regexp.json';

const PostValidation: ValidationChain[] = [
  body('title')
    .isString()
    .matches(title),
  /* .custom((value, { req }) => {
      const titleRegExp: RegExp = new RegExp(title);

      if (req.body.title) {
        if (req.body.title === 'title') {
          return titleRegExp.test(value);
        }
      } else {
        return false;
      }
    }), */
  body('content')
    .isString()
    .matches(content),
  /* .custom((value, { req }) => {
      const contentsRegExp: RegExp = new RegExp(contents);

      if (req.body.contents) {
        if (req.body.contents === 'contents') {
          return contentsRegExp.test(value);
        }
      } else {
        return false;
      }
    }), */
];

export default PostValidation;
