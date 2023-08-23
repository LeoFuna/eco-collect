import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable('collect_point_residues', table => {
    table.increments('id').primary();
    table.integer('collect_point_id')
      .notNullable()
      .references('id')
      .inTable('collect_points')
      .onDelete('CASCADE');
    table.integer('residue_id')
      .notNullable()
      .references('id')
      .inTable('residues')
      .onDelete('CASCADE');
  })

}

export async function down(knex: Knex) {
  return knex.schema.dropTable('collect_point_residues');
}