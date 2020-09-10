import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import APIRouter from './routes/apiRouter';
import usersRouter from './routes/usersRouter';
import authRouter from './routes/authRouter';

dotenv.config();

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', APIRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);

const port = process.env.PORT || '3000';

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

export default app;
