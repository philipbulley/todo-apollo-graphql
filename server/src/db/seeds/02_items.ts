import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<any> {
  // Deletes ALL existing entries
  await knex('items').del();

  // Inserts seed entries
  await knex('items').insert([
    { list_id: 1, name: 'Fish', done: false },
    { list_id: 1, name: 'Chips', done: false },
    { list_id: 1, name: 'Bangers', done: false },
    { list_id: 1, name: 'Mash', done: false },
    { list_id: 1, name: 'Pizza', done: false },
    { list_id: 2, name: 'Cat', done: false },
    { list_id: 2, name: 'Dog', done: false },
    { list_id: 2, name: 'Goldfish', done: false },
    { list_id: 2, name: 'Hamster', done: false },
    { list_id: 2, name: 'Lion', done: false },
    { list_id: 2, name: 'Tiger', done: true },
    { list_id: 2, name: 'Panther', done: false },
    { list_id: 2, name: 'Hyena', done: false },
    { list_id: 2, name: 'Elephant', done: true },
    { list_id: 2, name: 'Monkey', done: false },
    { list_id: 2, name: 'Axolotl', done: true },
    { list_id: 2, name: 'Shark', done: false },
    { list_id: 2, name: 'Barracuda', done: false },
    { list_id: 2, name: 'Blue Whale', done: false },
    { list_id: 2, name: 'Loch Ness Monster', done: true },
    { list_id: 2, name: 'Diplodocus', done: false },
    { list_id: 2, name: 'Stegosaurus', done: false },
    { list_id: 2, name: 'Triceratops', done: true },
    { list_id: 2, name: 'Tyrannosaurus', done: false },
    { list_id: 2, name: 'Woolly Mammoth', done: false }
  ]);
}
