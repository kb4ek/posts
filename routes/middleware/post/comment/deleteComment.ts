import { NextFunction, Request, Response } from 'express';

import Comment from '../../../../database/models/comment';

const deleteComment = async (req: Request, res: Response, next: NextFunction) => {
  const userPk = res.locals.user.pk;
  const postPk = req.query.postId;
  const commentPk = req.query.commentPk;

  try {
    await Comment.destroy({
      where: {
        pk: commentPk,
        postPk,
        userPk,
      },
    });

    res.status(200).json({
      result: {
        SUCCESS: true,
        message: '댓글 삭제 성공',
      },
    });
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

export default deleteComment;
