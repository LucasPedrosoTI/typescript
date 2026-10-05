import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('salaries', (table) => {
    table.increments('id').primary();
    table
      .integer('users_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users')
      .onDelete('cascade')
      .onUpdate('cascade');
    table.decimal('salary', 10, 2).unsigned();
    table.integer('business_days').unsigned();
    table.integer('business_hours').unsigned();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('salaries');
};
