import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email', 70).notNullable().unique();
    table.string('password').notNullable();
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('users');
};
