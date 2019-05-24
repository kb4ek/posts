import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';
import Post from '../../../database/models/post';

const editPost = (req: Request, res: Response, next: NextFunction) => {
  const { title, content } = req.body;
  const pk = res.locals.temp.postPk;

  try {
    Post.update(
      {
        title,
        content,
      },
      {
        where: { pk },
      }
    ).then((post: Post) => {
      res.status(200).json({
        result: {
          SUCCESS: true,
          message: '수정이 완료되었습니다.',
        },
        data: {
          title: title,
          content: content,
        },
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ result: { SUCCESS: false, message: '서버 에러' } });
  }
};

export default editPost;
