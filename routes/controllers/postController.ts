import { Router } from 'express';

import verifyToken from '../middleware/jwt/verifyToken';
import postValidation from '../middleware/post/_validation';
import checkValidation from '../middleware/common/checkValidation';
import postCreate from '../middleware/post/createPost';

const router = Router();

router.post('/write', verifyToken, postValidation, checkValidation, postCreate);

export default router;
