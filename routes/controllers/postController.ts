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

router.use(verifyToken);

router.post('/write', postValidation, checkValidation, createPost);
router.post('/edit', checkUser, postValidation, checkValidation, editPost);
router.post('/delete', checkUser, deletePost);
router.post('/like', likePost);

router.post('/comment/write', commentValidation, checkValidation, createComment);

export default router;
