import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';

const login = (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  console.log(res.locals.temp);
  const password = res.locals.temp.password;

  try {
    if (user.password === password) {
      next();
    } else {
      res.status(400).json({ result: { SUCCESS: false, message: '패스워드 불일치 ' } });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ result: { SUCCESS: false, message: '' } });
  }
};

export default login;
