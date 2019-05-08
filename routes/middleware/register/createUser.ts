import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  const { id, name } = req.body;
  const { password, passwordKey } = res.locals.temp;

  try {
    await User.create({
      userID: id,
      password: password,
      passwordKey: passwordKey,
      name: name,
    });

    res.status(200).json({ result: { SUCCESS: true, message: '성공적으로 회원가입되었습니다.' } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ result: { SUCCESS: false, message: 'server error' } });
  }
};

export default createUser;
