import { pbkdf2Sync, randomBytes } from 'crypto';
import { NextFunction, Request, Response } from 'express';

import * as encryptionJson from '../../../config/encryption.json';

const passwordEncryption = (req: Request, res: Response, next: NextFunction) => {
  const password: string = req.body.password;
  const { algorithm, saltSize, iteration, encryptionSize } = encryptionJson;

  try {
    const salt = req.body.password || randomBytes(saltSize).toString('base64');
    const key = pbkdf2Sync(password, salt, iteration, encryptionSize, algorithm).toString('base64');

    res.locals.temp = {
      password: key,
      passwordKey: salt,
    };
    next();
  } catch (err) {
    console.log(err);
    res.status(500).json({ result: { SUCCESS: false, message: 'server error' } });
  }
};

export default passwordEncryption;
