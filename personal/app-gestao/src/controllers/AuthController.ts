import { Request, Response } from 'express';
import dotenv from 'dotenv';
import jwt, { Secret } from 'jsonwebtoken';
import knex from '../db/connection';
import bcrypt from 'bcrypt';

import { capitalizeName, IUser } from '../utils/utils';

dotenv.config();

const jwtSign = (data: object | Buffer | IUser) => {
  const parsedData = data as IUser;

  if (parsedData.password) {
    parsedData.password = undefined;
  }

  return jwt.sign({ ...parsedData }, process.env.SECRET as Secret, {
    expiresIn: 3600,
  });
};

export default {
  signup: async (req: Request, res: Response) => {
    const { email, password, first_name, last_name, business_name } = req.body;

    if (!email || !password) {
      return res.status(422).send({ msg: 'Você deve incluir usuário e senha' });
    }

    try {
      const [user] = await knex('users').where('email', email);

      if (user) return res.status(422).send({ msg: 'usuário ja cadastrado' });

      // white space verification
      if (email.indexOf(' ') > -1 || password.indexOf(' ') > -1) {
        return res
          .status(422)
          .send({ msg: 'Usuário e senha não podem conter espaços' });
      }

      // email and pw length verification
      if (email.length > 20 || password.length > 10) {
        return res.status(422).send({
          msg:
            'Usuário pode ter no máximo 20 caracteres e senha pode ter no máximo 10',
        });
      }

      const newUser = {
        email,
        password: bcrypt.hashSync(password, 10),
        first_name: capitalizeName(first_name.trim()),
        last_name: capitalizeName(last_name.trim()),
        business_name: business_name.trim(),
        logo: 'no-logo.png',
        admin: 0,
        plan: 'free',
      };

      const [id] = await knex('users').insert(newUser);

      const token = jwtSign({ id, ...newUser });

      return res.status(200).json({ auth: true, token });
    } catch (error) {
      res.status(400).json({ error: 'Algo deu errado!' });
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

      const token = jwtSign(user);

      return res.status(200).json({ auth: true, token });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  },
};
