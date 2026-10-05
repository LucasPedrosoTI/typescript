import { Router } from 'express';

const apiRouter = Router();

apiRouter.get('/', (req, res) => res.json({ msg: 'API is running.' }));

export default apiRouter;
