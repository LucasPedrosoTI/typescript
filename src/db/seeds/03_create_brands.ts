import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('brands').insert([
    {
      name: 'Nestlé',
    },
    {
      name: 'Sicao',
    },
    {
      name: 'Melken',
    },
  ]);
};
