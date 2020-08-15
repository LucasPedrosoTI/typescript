import { Request, Response, NextFunction } from 'express';

import jwt, { Secret } from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['x-access-token'] as string;
  let jwtPayload;

  if (!token)
    return res.status(401).json({ auth: false, message: 'No token provided.' });

  try {
    jwtPayload = jwt.verify(token, process.env.SECRET as Secret) as {
      id: string;
      email: string;
    };
  } catch (err) {
    return res.status(401).json({ auth: false, msg: err.message });
  }

  next();
};

export default verifyJWT;
