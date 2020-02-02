import { Item, Items } from '../db/types/Items';
import {
  findMany as _findMany,
  findOne as _findOne,
  FindOptions
} from '../db/find';

export async function findMany(options: FindOptions<Item>): Promise<Items> {
  return _findMany<Items>('items', options);
}

export async function findOne(
  options: FindOptions<Item>
): Promise<Item | null> {
  return _findOne<Item>('items', options);
}
