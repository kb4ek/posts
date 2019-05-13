import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';
import Post from '../../../database/models/post';
import { resolveTxt } from 'dns';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  const { title, content } = req.body;
  const pk = res.locals.user.pk;

  try {
    await User.findOne({
      where: {
        pk,
      },
    }).then((user: User) => {
      try {
        Post.create({
          userPk: pk,
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
