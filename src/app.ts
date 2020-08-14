import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';

import usersRouter from './routes/usersRouter';

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);

const port = process.env.PORT || '3000';

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server running on port ${port}`);
});

export default app;
