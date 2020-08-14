import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('machine_brands').insert([
    {
      name: 'SumUp',
    },
    {
      name: 'Mercado Pago',
    },
    {
      name: 'Stone',
    },
    {
      name: 'PagSeguro',
    },
    {
      name: 'Cielo',
    },
    {
      name: 'SafraPay',
    },
  ]);
};
