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
      preparation:
        'Leve todos os ingredientes ao fogo mexendo até que você levante a espátula e o recheio caia em blocos, medio/alto, e desgrude da lateral da panela, Retire da panela e deixe esfriar',
      profit: 0.3,
      updated_at: new Date(),
    },
  ]);
};
