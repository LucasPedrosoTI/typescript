import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('machines', (table) => {
    table.increments('id').primary();
    table
      .integer('machine_brands_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('machine_brands');
    table.string('name', 70);
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('machines');
};
