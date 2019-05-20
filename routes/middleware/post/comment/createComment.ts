import { NextFunction, Request, Response } from 'express';

import Comment from '../../../../database/models/comment';
import User from '../../../../database/models/user';

const createComment = async (req: Request, res: Response, next: NextFunction) => {
  const user: User = res.locals.user;
  const postPk = req.query.postId;

  try {
    User.findOne({
      where: { pk: user.pk },
    }).then((user: User) => {
      Comment.create({
        name: user.name,
        userPk: user.pk,
        postPk: postPk,
        content: req.body.comment,
      });

      res.status(200).json({
        result: {
          SUCCESS: true,
          message: '댓글이 작성되었습니다.',
        },
        data: {
          name: user.name,
          userPk: user.pk,
          postPk: postPk,
          comment: req.body.comment,
        },
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ result: { SUCCESS: false, message: 'server error' } });
  }
};

export default createComment;
