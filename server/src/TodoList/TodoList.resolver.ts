import { todoListItemConnection } from '../TodoListItem/TodoListItem.resolver';
import { QueryResolvers } from '../__generated__/graphql';
import knex from './../db';
import { List, Lists } from '../db/types/lists';
const Hashids = require('hashids/cjs');
const hashids = new Hashids('TodoList');

export const todoListConnection: QueryResolvers['allTodoLists'] = async () => {
  const lists: Lists = await knex('lists').select('*');

  return {
    pageInfo: {
      hasNextPage: false
    },
    edges: lists.map((list: List) => ({
      cursor: hashids.encode(list.id),
      node: {
        ...list,
        id: list.id.toString(),
        createdAt: list.created_at,
        updatedAt: list.updated_at
      }
    }))
  };
};

export const todoList: QueryResolvers['todoList'] = async (parent, args) => {
  const lists: Lists = await knex('lists')
    .select('*')
    .where('id', args.id);

  if (!lists.length) {
    return null;
  }

  const list = lists[0];

  return {
    ...list,
    id: list.id.toString(),
    createdAt: list.created_at,
    updatedAt: list.updated_at
  };
};

export const TodoList = {
  items: todoListItemConnection
};
