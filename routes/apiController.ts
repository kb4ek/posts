import { Router } from 'express';

import user from './controllers/verifyController';
import post from './controllers/postController';

const router = Router();

router.use('/user', user);
router.use('/post', post);

export default router;
