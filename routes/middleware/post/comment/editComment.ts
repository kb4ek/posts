import { NextFunction, Request, Response } from 'express';

import Comment from '../../../../database/models/comment';

const editComment = async (req: Request, res: Response, next: NextFunction) => {
  const commentPk = req.query.commentPk;
  const content = req.body.comment;

  try {
    await Comment.update(
      {
        content,
      },
      {
        where: {
          pk: commentPk,
        },
      }
    );

    res.status(200).json({
      result: {
        SUCCESS: true,
        message: '댓글 수정 성공',
      },
      data: {
        comment: content,
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

export default editComment;
