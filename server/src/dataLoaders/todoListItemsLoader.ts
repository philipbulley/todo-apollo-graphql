import { Items } from '../db/types/Items';
import DataLoader from 'dataloader';
import knex from '../db';

const todoListItemsLoader = new DataLoader<string, Items>(async listIds => {
  const items: Items = await knex('items')
    .select('*')
    .whereIn('list_id', listIds);

  const itemsMap = items.reduce<Record<string, Items>>((acc, item) => {
    if (!acc[item.list_id]) {
      acc[item.list_id] = [item];
    } else {
      acc[item.list_id].push(item);
    }
    return acc;
  }, {});

  return listIds.map(listId => itemsMap[listId]);
});

export default todoListItemsLoader;
