import { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt, { Secret } from 'jsonwebtoken';
import knex from '../db/connection';
import bcrypt from 'bcrypt';

import { capitalizeName } from '../utils/utils';

dotenv.config();

export default {
  signup: async (req: Request, res: Response) => {
    const { email, password, first_name, last_name } = req.body;

    if (!email || !password)
      return res.status(422).send({ msg: 'Você deve incluir usuário e senha' });

    try {
      const [user] = await knex('users').where('email', email);

      if (user) return res.status(422).send({ msg: 'usuário ja cadastrado' });

      if (email.indexOf(' ') > -1 || password.indexOf(' ') > -1)
        return res
          .status(422)
          .send({ msg: 'Usuário e senha não podem conter espaços' });

      if (email.length > 20 || password.length > 10)
        return res.status(422).send({
          msg:
            'Usuário pode ter no máximo 20 caracteres e senha pode ter no máximo 10',
        });

      const hash = bcrypt.hashSync(password, 10);

      const newUser = await knex('users').insert({
        email,
        password: hash,
        first_name: capitalizeName(first_name.trim()),
        last_name: capitalizeName(last_name.trim()),
      });

      const token = jwt.sign(
        { id: user.id, email },
        process.env.SECRET as Secret,
        {
          expiresIn: 300,
        }
      );

      return res.status(200).json({ auth: true, token });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  signin: async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(422)
        .send({ msg: 'Você deve preencher usuário e senha' });
    }

    try {
      const [user] = await knex('users').where('email', email);

      if (!user || !bcrypt.compareSync(password, user.password))
        return res.status(401).send({ msg: 'Usuário ou senha incorretos' });

      const token = jwt.sign(
        { id: user.id, email },
        process.env.SECRET as Secret,
        {
          expiresIn: 300,
        }
      );

      return res.status(200).json({ auth: true, token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
