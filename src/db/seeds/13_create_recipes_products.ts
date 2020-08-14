import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('recipes_products').insert([
    {
      recipes_id: 1,
      users_products_id: 1,
      quantity: 395,
    },
    {
      recipes_id: 1,
      users_products_id: 2,
      quantity: 200,
    },
    {
      recipes_id: 1,
      users_products_id: 3,
      quantity: 100,
    },
    {
      recipes_id: 1,
      users_products_id: 4,
      quantity: 20,
    },
  ]);
};
