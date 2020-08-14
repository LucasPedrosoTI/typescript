import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('machines').insert([
    {
      machine_brands_id: 1,
      name: 'SumUp Top',
    },
    {
      machine_brands_id: 1,
      name: 'SumUp On',
    },
    {
      machine_brands_id: 1,
      name: 'SumUp Total',
    },
    {
      machine_brands_id: 2,
      name: 'Point Smart',
    },
    {
      machine_brands_id: 2,
      name: 'Point Pro',
    },
    {
      machine_brands_id: 2,
      name: 'Point Mini',
    },
  ]);
};
