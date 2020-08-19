import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../config/multer';

import UsersController from '../controllers/UsersController';
import { verifyJWT, isAdmin, isAdminOrCurrentUser } from '../middlewares/auth';

const router = Router();
const upload = multer(multerConfig);

/* GET users listing. */
router.get('/', verifyJWT, isAdmin, UsersController.index);

router.get('/:id', verifyJWT, isAdminOrCurrentUser, UsersController.getOne);

router.post(
  '/:id',
  verifyJWT,
  isAdminOrCurrentUser,
  upload.single('logo'),
  UsersController.update
);
router.delete('/:id', verifyJWT, isAdminOrCurrentUser, UsersController.delete);

export default router;
