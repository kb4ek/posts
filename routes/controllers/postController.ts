import { Router } from 'express';

import verifyToken from '../middleware/jwt/verifyToken';
import checkValidation from '../middleware/common/checkValidation';
import checkUser from '../middleware/post/common/checkUser';

//post
import createPost from '../middleware/post/createPost';
import editPost from '../middleware/post/editPost';
import deletePost from '../middleware/post/deletePost';
import likePost from '../middleware/post/likePost';
import postValidation from '../middleware/post/_validation';

//comment
import createComment from '../middleware/post/comment/createComment';
import commentValidation from '../middleware/post/comment/_validation';
import deleteComment from '../middleware/post/comment/deleteComment';
import editComment from '../middleware/post/comment/editComment';
import likeComment from '../middleware/post/comment/likeComment';

const router = Router();

router.use(verifyToken);

router.post('/write', postValidation, checkValidation, createPost);
router.post('/edit', checkUser, postValidation, checkValidation, editPost);
router.post('/delete', checkUser, deletePost);
router.post('/like', likePost);

router.post('/comment/write', commentValidation, checkValidation, createComment);
router.post('/comment/delete', checkUser, deleteComment);
router.post('/comment/edit', checkUser, editComment);
router.post('/comment/like', likeComment);

export default router;
