import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('food_apps', (table) => {
    table.increments('id').primary();
    table.string('name', 70).notNullable().unique();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('food_apps');
};
