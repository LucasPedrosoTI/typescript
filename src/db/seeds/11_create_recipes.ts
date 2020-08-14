import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('recipes').insert([
    {
      users_id: 1,
      name: 'Brigadeiro',
      type: 'Doces',
      current_price: 50,
      shelf_life: '4 dias',
      yield: 47,
      prep_time: 30,
      updated_at: new Date(),
    },
  ]);
};
