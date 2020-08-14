import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('users_expenses', (table) => {
    table.increments('id').primary();
    table
      .integer('users_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');
    table
      .integer('expenses_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('expenses');
    table.decimal('cost', 10, 2).unsigned();
    table.integer('divided_by').unsigned();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('users_expenses');
};
