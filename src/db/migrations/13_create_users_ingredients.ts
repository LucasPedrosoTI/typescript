import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('users_ingredients', (table) => {
    table.increments('id').primary();

    table
      .integer('users_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');

    table
      .integer('ingredients_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('ingredients');

    table.decimal('price', 10, 2).unsigned();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('users_ingredients');
};
