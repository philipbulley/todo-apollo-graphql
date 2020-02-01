import * as Knex from "knex";


export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('lists', t => {
    t.increments('id').primary();
    t.string('name').notNullable();
    t.timestamps(false, true);
  });
}


export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists('lists');
}

