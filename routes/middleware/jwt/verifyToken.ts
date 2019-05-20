import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import User from '../../../database/models/user';

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  const token: string | string[] = req.headers.token;
  const tokenSecret: string = process.env.TOKEN_SECRET;

  try {
    const { pk } = jwt.verify(token as string, tokenSecret);
    User.findOne({
      where: {
        pk,
      },
    }).then((user: User) => {
      if (user) {
        res.locals.user = user;
        next();
      } else {
        res.status(400).json({ result: { SUCCESS: false, message: 'user data error' } });
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ result: { SUCCESS: false, message: 'server error' } });
  }
};

export default verifyToken;
