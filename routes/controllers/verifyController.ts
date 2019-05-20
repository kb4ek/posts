import { Router } from 'express';

//validation, common
import LoginValidation from '../middleware/user/login/_validation';
import RegisterValidation from '../middleware/user/register/_validation';
import checkValidation from '../middleware/common/checkValidation';
import findUser from '../middleware/common/findUser';

//login
import login from '../middleware/user/login/login';
import issueToken from '../middleware/jwt/issueToken';

//register
import passwordEncryption from '../middleware/user/common/passwordEncryption';
import createUser from '../middleware/user/register/createUser';

const router = Router();

router.post('/login', LoginValidation);
router.post('/register', RegisterValidation);

router.use(checkValidation);

router.post('/login', findUser, passwordEncryption, login, issueToken);
router.post('/register', findUser, passwordEncryption, createUser);

export default router;
