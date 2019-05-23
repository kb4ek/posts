import { NextFunction, Request, Response } from 'express';

import User from '../../../../database/models/user';
import comment_like from '../../../../database/models/comment_like';

const likeComment = async (req: Request, res: Response, next: NextFunction) => {
  const commentPk = req.query.commentPk;
  const userPk = res.locals.user.pk;

  try {
    const like = await comment_like.findOne({
      where: {
        userPk,
        commentPk,
      },
    });

    if (like) {
      await comment_like.destroy({
        where: {
          userPk,
          commentPk,
        },
      });

      res.status(200).json({
        result: {
          SUCCESS: true,
          message: '좋아요 취소',
        },
      });
    } else {
      await comment_like.create({
        userPk,
        commentPk,
      });

      res.status(200).json({
        result: {
          SUCCESS: true,
          message: '좋아요 성공',
        },
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({
      result: {
        SUCCESS: false,
        message: 'server error',
      },
    });
  }
};

export default likeComment;
