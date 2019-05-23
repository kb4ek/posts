import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';
import post_like from '../../../database/models/post_like';

const likePost = (req: Request, res: Response, next: NextFunction) => {
  const postPk = req.query.postId;
  const user: User = res.locals.user;

  try {
    post_like
      .findOne({
        where: {
          postPk: postPk,
          userPk: user.pk,
        },
      })
      .then(async (like: post_like) => {
        if (like) {
          await post_like.destroy({
            where: {
              postPk: postPk,
              userPk: user.pk,
            },
          });

          res.status(200).json({ result: { SUCCESS: true, message: '좋아요 취소' } });
        } else {
          await post_like.create({
            postPk: postPk,
            userPk: user.pk,
          });

          res.status(200).json({ result: { SUCCESS: true, message: '좋아요 성공' } });
        }
      });
  } catch (err) {
    console.log(err);
    res.status(500).json({ result: { SUCCESS: false, message: 'server error' } });
  }
};

export default likePost;
