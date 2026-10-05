import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('brands', (table) => {
    table.increments('id').primary();
    table.string('name', 80).notNullable().unique();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('brands');
};
