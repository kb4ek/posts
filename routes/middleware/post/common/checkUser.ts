import { NextFunction, Request, Response } from 'express';

import User from '../../../../database/models/user';
import Post from '../../../../database/models/post';

const findUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user_pk = res.locals.user.pk;
    const pk = req.query.postId;

    await Post.findOne({
      where: { pk },
    }).then((post: Post) => {
      if (post.userPk === user_pk) {
        res.locals.temp = {
          postPk: pk,
          userPk: user_pk,
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
