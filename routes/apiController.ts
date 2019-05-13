import { Router } from 'express';

import verifyController from './controllers/verifyController';
import postController from './controllers/postController';

const router = Router();

router.use('/user', verifyController);
router.use('/post', postController);

export default router;
