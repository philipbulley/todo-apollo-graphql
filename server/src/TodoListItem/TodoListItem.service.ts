import knex from '../db';
import { Item, Items } from '../db/types/Items';

type WhereIn<T> = {
  [P in keyof Item]?: Item[P][] | ReadonlyArray<Item[P]>;
};

type FindOptions = {
  where?: Partial<Item>;
  whereIn?: WhereIn<Item>;
};

export async function findMany(options: FindOptions): Promise<Items> {
  const query = knex('items').select('*');

  applyOptions(query, options);

  return query;
}

export async function findOne(options: FindOptions): Promise<Item | null> {
  const query = knex('items')
    .select('*')
    .limit(1);

  applyOptions(query, options);

  return query.then((rows: Items[]) => (rows.length ? rows[0] : null));
}

function applyOptions(query: ReturnType<typeof knex.select>, {where, whereIn}: FindOptions) {
  if (whereIn) {
    Object.entries(whereIn).forEach(([key, value]) =>
      query.whereIn(key, value)
    );
  }

  if (where) {
    Object.entries(where).forEach(([key, value]) => query.where(key, value));
  }
}
