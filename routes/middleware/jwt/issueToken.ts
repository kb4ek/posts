import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';

const issueToken = (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  const tokenSecret = process.env.TOKEN_SECRET;
  const token = jwt.sign({ pk: user.pk }, tokenSecret);

  res.status(200).json({
    result: {
      SUCCESS: true,
      message: '로그인 성공',
    },
    data: {
      token: token,
      user: {
        name: user.name,
      },
    },
  });
};

export default issueToken;
