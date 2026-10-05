import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('food_apps').insert([
    {
      name: 'iFood',
    },
    {
      name: 'Uber Eats',
    },
    {
      name: 'Rappi',
    },
  ]);
};
