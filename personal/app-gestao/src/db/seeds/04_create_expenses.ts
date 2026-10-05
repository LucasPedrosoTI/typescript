import Knex from 'knex';

export const seed = async (knex: Knex) => {
  await knex('expenses').insert([
    {
      name: 'Água',
    },
    {
      name: 'Energia',
    },
    {
      name: 'Gás',
    },
    {
      name: 'Combustível/Condução',
    },
    {
      name: 'Condomínio',
    },
    {
      name: 'Internet',
    },
    {
      name: 'Telefone',
    },
    {
      name: 'Publicidade',
    },
    {
      name: 'Mei/Contador',
    },
    {
      name: 'Aluguel',
    },
  ]);
};
