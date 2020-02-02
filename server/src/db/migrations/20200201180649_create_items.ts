import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('items', t => {
    t.increments('id').primary();
    t.integer('list_id')
      .references('id')
      .inTable('lists');
    t.string('name').notNullable();
    t.boolean('done').notNullable();
    t.timestamps(false, true);
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists('items');
}
