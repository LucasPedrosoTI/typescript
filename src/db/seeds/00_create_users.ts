import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('users').insert([
    {
      email: 'lp@mail.com',
      password: '123456',
      first_name: 'Lucas',
      last_name: 'Pedroso',
    },
  ]);
};
