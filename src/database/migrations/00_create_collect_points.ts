import { Knex } from "knex";

export async function up(knex: Knex) {
  // Seria responsavel por rodar a migration
  return knex.schema.createTable('collect_points', table => {
    table.increments('id').primary();
    table.string('image');
    table.string('name').notNullable();
    table.string('email').notNullable();
    table.string('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.string('city').notNullable();
    table.string('uf', 2).notNullable();
  })
}

export async function down(knex: Knex) {
  // Seria responsavel para dar rollback da migration
  return knex.schema.dropTable('collect_points');
}