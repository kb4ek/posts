import { Router } from 'express';

import verifyToken from '../middleware/jwt/verifyToken';
import postValidation from '../middleware/post/_validation';
import checkValidation from '../middleware/common/checkValidation';
import checkUser from '../middleware/post/common/checkUser';

//createPost
import createPost from '../middleware/post/createPost';

//editPost
import editPost from '../middleware/post/editPost';

//deletePost
import deletePost from '../middleware/post/deletePost';

//likePost
import likePost from '../middleware/post/likePost';

//comment
import createComment from '../middleware/post/comment/createComment';
import commentValidation from '../middleware/post/comment/_validation';

const router = Router();

router.post('/write', verifyToken, postValidation, checkValidation, createPost);
router.post('/edit', verifyToken, checkUser, postValidation, checkValidation, editPost);
router.post('/delete', verifyToken, checkUser, deletePost);
router.post('/like', verifyToken, likePost);

router.post('/comment/write', verifyToken, commentValidation, checkValidation, createComment);

export default router;
