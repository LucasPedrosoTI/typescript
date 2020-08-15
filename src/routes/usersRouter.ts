import { Router } from 'express';

import UsersController from '../controllers/UsersController';
import verifyJWT from '../middlewares/auth';

const router = Router();

/* GET users listing. */
router.get('/', verifyJWT, UsersController.index);

export default router;
