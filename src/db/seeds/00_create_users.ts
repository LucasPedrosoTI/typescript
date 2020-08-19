import Knex from 'knex';
import bcrypt from 'bcrypt';

export const seed = async (knex: Knex) => {
  await knex('users').insert([
    {
      email: 'lp@mail.com',
      password: bcrypt.hashSync('123456', 10),
      first_name: 'Lucas',
      last_name: 'Pedroso',
      business_name: 'DaChef Romão',
      logo: 'logo.svg',
      admin: 1,
      plan: 'free',
    },
  ]);
};
