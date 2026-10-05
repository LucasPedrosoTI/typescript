import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('users_food_apps').insert([
    {
      users_id: 1,
      food_apps_id: 1,
      fee: 0.12,
    },
  ]);
};
