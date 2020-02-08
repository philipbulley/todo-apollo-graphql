import * as Knex from 'knex';
import { List } from '../types/Lists';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  await knex<List>('lists').del();

  // Inserts seed entries
  await knex<List>('lists').insert([
    {
      id: 1,
      name: 'Groceries',
      created_at: '2019-05-25 13:33:15',
      updated_at: '2019-06-10 21:33:23'
    },
    {
      id: 2,
      name: 'Feed Pets',
      created_at: '2020-02-01 20:00:51',
      updated_at: '2020-02-04 14:30:12'
    },
    {
      id: 3,
      name: 'Places to Visit',
      created_at: '2020-02-02 16:32:12',
      updated_at: '2020-02-07 03:41:32'
    }
  ]);
}
