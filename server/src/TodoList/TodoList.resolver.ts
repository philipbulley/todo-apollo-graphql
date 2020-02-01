import { TodoListItemConnection } from '../TodoListItem/TodoListItem.resolver';
import { Resolver, ResolversTypes } from '../__generated__/graphql';
import knex from './../db';
import { List, Lists } from '../db/types/lists';
const Hashids = require('hashids/cjs');
const hashids = new Hashids('lists');

export const TodoListConnection: Resolver<ResolversTypes['TodoListConnection']> = async () => {
  const lists: Lists = await knex('lists').select('*');

  return {
    pageInfo: {
      hasNextPage: false
    },
    edges: lists.map((row: List) => ({
      cursor: hashids.encode(row.id),
      node: {
        ...row,
        id: row.id.toString(),
        createdAt: row.created_at,
        updatedAt: row.updated_at
      }
    }))
  };
};

export const TodoList = {
  items: TodoListItemConnection
};
