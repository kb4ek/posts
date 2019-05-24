import { NextFunction, Request, Response } from 'express';

import User from '../../../../database/models/user';
import Post from '../../../../database/models/post';

const findUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const user: User = res.locals.user;
    const pk = req.query.postId;

    Post.findOne({
      where: { pk },
    }).then((post: Post) => {
      if (post.userPk === user.pk) {
        res.locals.temp = {
          postPk: pk,
          userPk: user.pk,
        };
        next();
      } else {
        res.status(400).json({ result: { SUCCESS: false, message: '일치하지 않는 유저' } });
      }
    });
  } catch (findErr) {
    console.log(findErr);
    res.status(500).json({ result: { SUCCESS: false, message: '서버 에러' } });
  }
};

export default findUser;
