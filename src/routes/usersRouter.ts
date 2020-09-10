import { Router } from 'express';

import multer from 'multer';
import multerConfig from '../config/multer';

import UsersController from '../controllers/UsersController';
import { verifyJWT, isAdmin, isAdminOrCurrentUser } from '../middlewares/auth';

const usersRouter = Router();
const upload = multer(multerConfig);

/* GET users listing. */
usersRouter.get('/', verifyJWT, isAdmin, UsersController.index);

usersRouter.get(
  '/:id',
  verifyJWT,
  isAdminOrCurrentUser,
  UsersController.getOne
);

usersRouter.post(
  '/:id',
  verifyJWT,
  isAdminOrCurrentUser,
  upload.single('logo'),
  UsersController.update
);
usersRouter.delete(
  '/:id',
  verifyJWT,
  isAdminOrCurrentUser,
  UsersController.delete
);

export default usersRouter;
