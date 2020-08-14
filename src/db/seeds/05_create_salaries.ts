import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('salaries').insert([
    {
      users_id: 1,
      salary: 3000,
      business_days: 5,
      business_hours: 8,
    },
  ]);
};
