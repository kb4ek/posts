import { Router } from 'express';

import user from './controllers/verifyController';

const router = Router();

router.use('/user', user);

export default router;
