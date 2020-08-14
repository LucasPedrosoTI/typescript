import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('users_products').insert([
    {
      users_id: 1,
      products_id: 1,
      price: 3.5,
    },
    {
      users_id: 1,
      products_id: 2,
      price: 2.5,
    },
    {
      users_id: 1,
      products_id: 3,
      price: 23,
    },
    {
      users_id: 1,
      products_id: 4,
      price: 19,
    },
  ]);
};
