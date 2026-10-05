import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('expenses', (table) => {
    table.increments('id').primary();
    table.string('name', 150).notNullable().unique();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('expenses');
};
