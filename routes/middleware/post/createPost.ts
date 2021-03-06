import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';
import Post from '../../../database/models/post';

const createPost = (req: Request, res: Response, next: NextFunction) => {
  const { title, content } = req.body;
  const user: User = res.locals.user;

  try {
    User.findOne({
      where: {
        pk: user.pk,
      },
    }).then(async (user: User) => {
      try {
        await Post.create({
          userPk: user.pk,
          title: title,
          contents: content,
          author: user.name,
        });
        res.status(200).json({
          result: {
            SUCCESS: true,
            message: '글이 성공적으로 작성되었습니다.',
          },
          data: {
            title: title,
            contents: content,
            author: user.name,
          },
        });
      } catch (err) {
        console.log(err);
        res.status(500).json({});
      }
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

export default createPost;
