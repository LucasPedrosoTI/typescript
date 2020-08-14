import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('recipes', (table) => {
    table.increments('id').primary();
    table
      .integer('users_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('users');

    table.string('name');
    table.string('type');
    table.decimal('price', 10, 2).unsigned();
    table.string('shelf_life', 20);
    table.decimal('yield', 10, 2).unsigned();
    table.decimal('prep_time', 10, 2).unsigned();
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('recipes');
};
