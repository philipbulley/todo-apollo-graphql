import { List, Lists } from '../db/types/Lists';

import {
  findMany as _findMany,
  findOne as _findOne,
  FindOptions
} from '../db/find';

export async function findMany(options?: FindOptions<List>): Promise<Lists> {
  return _findMany<Lists>('lists', options);
}

export async function findOne(
  options: FindOptions<List>
): Promise<List | null> {
  return _findOne<List>('lists', options);
}
