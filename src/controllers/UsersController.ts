import { Request, Response } from 'express';

import knex from '../db/connection';

export default {
  index: async (req: Request, res: Response) => {
    try {
      const users = await knex('users');

      return res.status(200).json(users);
    } catch (error) {
      res.status(404).json({ msg: error.message });
    }
  },
};
