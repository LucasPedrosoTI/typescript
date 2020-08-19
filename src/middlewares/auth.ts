import { Request, Response, NextFunction } from 'express';

import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { IUser } from '../utils/utils';

dotenv.config();

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] as string;
  let jwtPayload;

  if (!token)
    return res.status(401).json({ auth: false, message: 'No token provided.' });

  try {
    jwtPayload = jwt.verify(token, process.env.SECRET as Secret) as IUser;
  } catch (err) {
    return res.status(401).json({ auth: false, msg: err.message });
  }

  return next();
};

const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { admin } = jwt.verify(
      req.headers['x-access-token'] as string,
      process.env.SECRET as Secret
    ) as IUser;

    if (admin === 0) {
      throw new Error('Must be admin to perform this action');
    }
  } catch (err) {
    return res.status(401).json({ auth: false, msg: err.message });
  }

  return next();
};

const isAdminOrCurrentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, admin } = jwt.verify(
      req.headers['x-access-token'] as string,
      process.env.SECRET as Secret
    ) as IUser;

    if (String(id) !== req.params.id && admin === 0) {
      throw new Error('Must be admin to perform this action');
    }
  } catch (err) {
    return res.status(401).json({ auth: false, msg: err.message });
  }

  return next();
};

export { verifyJWT, isAdmin, isAdminOrCurrentUser };
