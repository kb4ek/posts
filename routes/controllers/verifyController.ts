import { Router } from 'express';

//validation
import joinValidation from '../middleware/register/_validation';
import checkValidation from '../middleware/common/checkValidation';

//register
import findUser from '../middleware/register/findUser';
import passwordEncryption from '../middleware/common/passwordEncryption';
import createUser from '../middleware/register/createUser';

const router = Router();

router.post('/register', joinValidation);

router.use(checkValidation);

router.post('/register', findUser, passwordEncryption, createUser);

export default router;
