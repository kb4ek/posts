import { Router } from 'express';

//validation, common
import LoginValidation from '../middleware/login/_validation';
import JoinValidation from '../middleware/register/_validation';
import checkValidation from '../middleware/common/checkValidation';
import findUser from '../middleware/common/findUser';

//login
import login from '../middleware/login/login';
import issueToken from '../middleware/jwt/issueToken';

//register
import passwordEncryption from '../middleware/common/passwordEncryption';
import createUser from '../middleware/register/createUser';

const router = Router();

router.post('/login', LoginValidation);
router.post('/register', JoinValidation);

router.use(checkValidation);

router.post('/login', findUser, passwordEncryption, login, issueToken);
router.post('/register', findUser, passwordEncryption, createUser);

export default router;
