import { Router } from 'express';

//token
import issueToken from '../middleware/jwt/issueToken';
import verifyToken from '../middleware/jwt/verifyToken';

//validation, common
import LoginValidation from '../middleware/user/login/_validation';
import RegisterValidation from '../middleware/user/register/_validation';
import changePasswordValidation from '../middleware/user/changePassword/_validation';
import checkValidation from '../middleware/common/checkValidation';
import findUser from '../middleware/common/findUser';

//login
import login from '../middleware/user/login/login';

//register
import passwordEncryption from '../middleware/user/common/passwordEncryption';
import createUser from '../middleware/user/register/createUser';

//changePassword
import changePassword from '../middleware/user/changePassword/changePassword';

const router = Router();

router.post('/changepassword', changePasswordValidation);
router.post('/login', LoginValidation);
router.post('/register', RegisterValidation);

router.use(checkValidation);

router.post('/changepassword', verifyToken, passwordEncryption, changePassword);
router.post('/login', findUser, passwordEncryption, login, issueToken);
router.post('/register', findUser, passwordEncryption, createUser);

export default router;
