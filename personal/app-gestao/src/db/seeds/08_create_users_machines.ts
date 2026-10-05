import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('users_machines').insert([
    {
      users_id: 1,
      machines_id: 6,
      debit_fee: 0.0199,
      credit_fee: 0.03,
    },
  ]);
};
