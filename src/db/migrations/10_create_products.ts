import Knex from 'knex';

export const up = (knex: Knex) => {
  return knex.schema.createTable('products', (table) => {
    table.increments('id').primary();
    table
      .integer('brands_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('brands')
      .onDelete('cascade')
      .onUpdate('cascade');
    table.string('name');
    table.decimal('quantity', 10, 2).unsigned();
    table.string('unit', 45);
  });
};

export const down = (knex: Knex) => {
  return knex.schema.dropTableIfExists('products');
};
