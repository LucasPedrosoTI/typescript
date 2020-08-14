import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('users_expenses').insert([
    {
      users_id: 1,
      expenses_id: 1,
      cost: 30,
      divided_by: 1,
    },
    {
      users_id: 1,
      expenses_id: 2,
      cost: 50,
      divided_by: 2,
    },
  ]);
};
