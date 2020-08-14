import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('users_food_apps', (table) => {
    table.increments('id').primary();
    table
      .integer('users_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');
    table
      .integer('food_apps_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('food_apps');

    table.decimal('fee', 10, 2).unsigned();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('users_food_apps');
};
