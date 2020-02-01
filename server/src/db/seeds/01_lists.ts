import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  await knex('lists').del();

  // Inserts seed entries
  await knex('lists').insert([
    { id: 1, name: 'Groceries' },
    { id: 2, name: 'Feed Pets' },
    { id: 3, name: 'Places to Visit' }
  ]);
}
