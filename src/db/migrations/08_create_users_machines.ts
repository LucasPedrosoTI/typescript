import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('users_machines', (table) => {
    table.increments('id').primary();
    table
      .integer('users_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');
    table
      .integer('machines_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('machines');
    table.decimal('debit_fee', 10, 2).unsigned();
    table.decimal('credit_fee', 10, 2).unsigned();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('users_machines');
};
