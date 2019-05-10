import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';
import Post from '../../../database/models/post';

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  const { title, contents } = req.body;
  const userID = res.locals.user.userID;

  try {
    await User.findOne({
      where: {
        userID: userID,
      },
    }).then(async (user: User) => {
      await Post.create({
        title: title,
        contents: contents,
        writer: user.name,
      });
      res.status(200).json({
        result: {
          SUCCESS: true,
          message: '글이 성공적으로 작성되었습니다.',
        },
        data: {
          title: title,
          contents: contents,
          writer: user.name,
        },
      });
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
