import knex from '../db';
import { List, Lists } from '../db/types/Lists';

export async function findMany(where?: Partial<List>): Promise<Lists> {
  const query = knex('lists').select('*');

  if (where) {
    Object.entries(where).forEach(([key, value]) => query.where(key, value));
  }

  const result = await query;
  return result.length ? result : null;
}

export async function findOne(where: Partial<List>): Promise<List | null> {
  const result = await findMany(where);
  return result.length ? result[0] : null;
}
