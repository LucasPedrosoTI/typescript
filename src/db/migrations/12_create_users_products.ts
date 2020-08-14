import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('users_products', (table) => {
    table.increments('id').primary();

    table
      .integer('users_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');

    table
      .integer('products_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('products');

    table.decimal('price', 10, 2).unsigned();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('users_products');
};
