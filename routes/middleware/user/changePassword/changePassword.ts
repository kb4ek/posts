import { NextFunction, Request, Response } from 'express';
import User from '../../../../database/models/user';

const changePassword = async (req: Request, res: Response, next: NextFunction) => {
  const { temp, user } = res.locals;
  try {
    await User.update(
      {
        password: temp.password,
        passworkKey: temp.passwordKey,
      },
      {
        where: {
          pk: user.pk,
        },
      }
    );

    res.status(200).json({
      result: {
        SUCCESS: true,
        message: '비밀번호 변경 완료',
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

export default changePassword;
