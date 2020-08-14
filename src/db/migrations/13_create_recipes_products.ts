import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('recipes_products', (table) => {
    table.increments('id').primary();

    table
      .integer('recipes_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('recipes');

    table
      .integer('users_products_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users_products');

    table.decimal('quantity', 10, 2).unsigned();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('recipes_products');
};
