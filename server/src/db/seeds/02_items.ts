import * as Knex from 'knex';
import { Item } from '../types/Items';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  await knex<Item>('items').del();

  // Inserts seed entries
  await knex<Item>('items').insert([
    {
      list_id: 1,
      name: 'Bananas',
      done: false,
      created_at: '2019-06-01 03:12:15',
      updated_at: '2019-06-01 13:23:15'
    },
    {
      list_id: 1,
      name: 'Apples',
      done: false,
      created_at: '2019-07-02 04:13:15',
      updated_at: '2019-07-02 14:34:15'
    },
    {
      list_id: 1,
      name: 'Bangers',
      done: false,
      created_at: '2019-08-03 05:14:15',
      updated_at: '2019-08-03 15:54:15'
    },
    {
      list_id: 1,
      name: 'Mash',
      done: false,
      created_at: '2019-09-04 10:31:15',
      updated_at: '2019-09-24 16:54:13'
    },
    {
      list_id: 1,
      name: 'Pizza',
      done: false,
      created_at: '2019-10-05 11:42:15',
      updated_at: '2019-10-05 17:31:15'
    },

    {
      list_id: 2,
      name: 'Cat',
      done: false,
      created_at: '2020-02-02 01:23:13',
      updated_at: '2020-02-04 14:30:12'
    },
    {
      list_id: 2,
      name: 'Dog',
      done: false,
      created_at: '2020-02-02 02:13:13',
      updated_at: '2020-02-04 23:30:12'
    },
    {
      list_id: 2,
      name: 'Goldfish',
      done: false,
      created_at: '2020-02-02 03:02:41',
      updated_at: '2020-02-02 20:00:51'
    },
    {
      list_id: 2,
      name: 'Hamster',
      done: false,
      created_at: '2020-02-02 04:03:51',
      updated_at: '2020-02-03 16:00:51'
    },
    {
      list_id: 2,
      name: 'Lion',
      done: false,
      created_at: '2020-02-02 05:08:45',
      updated_at: '2020-02-03 13:00:51'
    },
    {
      list_id: 2,
      name: 'Tiger',
      done: true,
      created_at: '2020-02-03 06:42:53',
      updated_at: '2020-02-05 13:00:13'
    },
    {
      list_id: 2,
      name: 'Panther',
      done: false,
      created_at: '2020-02-03 07:27:38',
      updated_at: '2020-02-03 13:00:51'
    },
    {
      list_id: 2,
      name: 'Hyena',
      done: false,
      created_at: '2020-02-03 08:19:39',
      updated_at: '2020-02-03 11:00:51'
    },
    {
      list_id: 2,
      name: 'Elephant',
      done: true,
      created_at: '2020-02-03 09:38:59',
      updated_at: '2020-02-03 16:00:51'
    },
    {
      list_id: 2,
      name: 'Monkey',
      done: false,
      created_at: '2020-02-03 10:47:24',
      updated_at: '2020-02-03 17:00:51'
    },
    {
      list_id: 2,
      name: 'Axolotl',
      done: true,
      created_at: '2020-02-04 11:44:24',
      updated_at: '2020-02-05 12:00:51'
    },
    {
      list_id: 2,
      name: 'Shark',
      done: false,
      created_at: '2020-02-06 12:42:59',
      updated_at: '2020-02-06 20:00:51'
    },
    {
      list_id: 2,
      name: 'Barracuda',
      done: false,
      created_at: '2020-02-04 13:26:45',
      updated_at: '2020-02-04 20:00:51'
    },
    {
      list_id: 2,
      name: 'Blue Whale',
      done: false,
      created_at: '2020-02-03 14:27:42',
      updated_at: '2020-02-04 20:00:51'
    },
    {
      list_id: 2,
      name: 'Loch Ness Monster',
      done: true,
      created_at: '2020-02-05 15:23:24',
      updated_at: '2020-04-06 20:00:51'
    },
    {
      list_id: 2,
      name: 'Diplodocus',
      done: false,
      created_at: '2020-02-05 16:33:15',
      updated_at: '2020-05-07 20:00:51'
    },
    {
      list_id: 2,
      name: 'Stegosaurus',
      done: false,
      created_at: '2020-02-08 17:42:45',
      updated_at: '2020-02-08 20:00:51'
    },
    {
      list_id: 2,
      name: 'Triceratops',
      done: true,
      created_at: '2020-02-05 18:16:33',
      updated_at: '2020-02-07 20:00:51'
    },
    {
      list_id: 2,
      name: 'Tyrannosaurus',
      done: false,
      created_at: '2020-02-04 19:53:45',
      updated_at: '2020-02-06 20:00:51'
    },
    {
      list_id: 2,
      name: 'Woolly Mammoth',
      done: false,
      created_at: '2020-02-05 20:15:15',
      updated_at: '2020-02-08 20:00:51'
    }
  ]);
}
