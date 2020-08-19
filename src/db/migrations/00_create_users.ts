import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email', 70).notNullable().unique();
    table.string('password').notNullable();
    table.string('first_name', 50).notNullable();
    table.string('last_name', 50).notNullable();
    table.string('business_name').notNullable();
    table.string('logo').notNullable();
    table.integer('admin').defaultTo(0).notNullable().unsigned();
    table.string('plan').defaultTo('free').notNullable();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('users');
};
