import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';

const findUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.body;

    await User.findOne({
      where: { userID: id },
    }).then((user: User) => {
      if (!user) {
        next();
      } else {
        res.status(500).json({ result: { SUCCESS: false, message: '중복된 아이디' } });
      }
    });
  } catch (findErr) {
    console.log(findErr);
    res.status(500).json({ result: { SUCCESS: false, message: '서버 에러' } });
  }
};

export default findUser;
