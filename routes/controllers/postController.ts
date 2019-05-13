import { Router } from 'express';

import verifyToken from '../middleware/jwt/verifyToken';
import postValidation from '../middleware/post/_validation';
import checkValidation from '../middleware/common/checkValidation';
import checkUser from '../middleware/post/common/checkUser';

//createPost
import createPost from '../middleware/post/createPost';

//editPost
import editPost from '../middleware/post/editPost';

const router = Router();

router.post('/write', verifyToken, postValidation, checkValidation, createPost);
router.post('/edit', verifyToken, checkUser, postValidation, checkValidation, editPost);

export default router;
