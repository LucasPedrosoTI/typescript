import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('recipes_ingredients', (table) => {
    table.increments('id').primary();

    table
      .integer('recipes_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('recipes');

    table
      .integer('ingredients_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('ingredients');
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('recipes_ingredients');
};
