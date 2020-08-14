import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('products').insert([
    {
      brands_id: 1,
      name: 'Leite Condensado Moça',
      quantity: 395,
      unit: 'g',
    },
    {
      brands_id: 1,
      name: 'Creme de Leite',
      quantity: 200,
      unit: 'g',
    },
    {
      brands_id: 2,
      name: 'Chocolate Blend Nobre',
      quantity: 1010,
      unit: 'g',
    },
    {
      brands_id: 3,
      name: 'Chocolate em Pó 33%',
      quantity: 1000,
      unit: 'g',
    },
  ]);
};
