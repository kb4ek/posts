import { NextFunction, Request, Response } from 'express';

import Comment from '../../../../database/models/comment';
import User from '../../../../database/models/user';

const createComment = async (req: Request, res: Response, next: NextFunction) => {
  const userPk = res.locals.user.pk;
  const postPk = req.query.postId;

  try {
    await User.findOne({
      where: { pk: userPk },
    }).then((user: User) => {
      Comment.create({
        name: user.name,
        userPk: userPk,
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
          userPk: userPk,
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
