import { Request, Response } from 'express';

import knex from '../db/connection';
import { IUser } from '../utils/utils';

export default {
  index: async (req: Request, res: Response) => {
    try {
      const users = await knex('users');

      return res.status(200).json(users);
    } catch (error) {
      res.status(404).json({ msg: 'Algo deu errado' });
    }
  },

  getOne: async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
      const [user] = await knex('users').where({ id });

      return res.status(200).json({ ...user });
    } catch (error) {
      res.status(404).json({ msg: 'Algo deu errado' });
    }
  },

  update: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { email, first_name, last_name, business_name, logo } = req.body;

      const [user] = (await knex('users').where({ id })) as IUser[];

      const updatedUser = {
        email: email ?? user.email,
        first_name: first_name ?? user.first_name,
        last_name: last_name ?? user.last_name,
        business_name: business_name ?? user.business_name,
        logo: req.file?.filename ?? user.logo,
      };

      await knex('users').where({ id }).update(updatedUser);

      return res.status(200).json(updatedUser);
    } catch (error) {
      return res.status(400).json({ error: 'Algo deu errado' });
    }
  },

  delete: async (req: Request, res: Response) => {
    try {
      const { id } = req.params;

      await knex('users').where({ id }).del();

      return res.status(200).json({ msg: 'Success' });
    } catch (error) {
      console.log(error.message);

      return res.status(400).json({ error: 'Algo deu errado' });
    }
  },
};
