import { NextFunction, Request, Response } from 'express';

import User from '../../../database/models/user';
import Post from '../../../database/models/post';

const deletePost = async (req: Request, res: Response, next: NextFunction) => {
  const pk = res.locals.temp.postPk;

  try {
    await Post.destroy({
      where: { pk },
    });

    res.status(200).json({ result: { SUCCESS: true, message: '글이 삭제되었습니다.' } });
  } catch (err) {
    console.log(err);
    res.status(500).json({ result: { SUCCESS: false, message: 'server error' } });
  }
};

export default deletePost;
