import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';

const findUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.body;

    await User.findOne({
      where: { id },
    }).then((user: User) => {
      switch (req.path) {
        case '/register':
          if (user) {
            res.status(400).json({ result: { SUCCESS: false, message: '중복된 아이디' } });
          } else {
            next();
          }
          break;
        case '/login':
          if (user) {
            res.locals.user = user;
            next();
          } else {
            res.status(400).json({ result: { SUCCESS: false, message: '존재하지 않는 아이디' } });
          }
      }
    });
  } catch (findErr) {
    console.log(findErr);
    res.status(500).json({ result: { SUCCESS: false, message: '서버 에러' } });
  }
};

export default findUser;
