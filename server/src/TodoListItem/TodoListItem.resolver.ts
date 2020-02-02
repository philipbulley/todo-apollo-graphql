import { Resolver, ResolversTypes, TodoList } from '../__generated__/graphql';
import { Context } from '../context';
import { DeepPartial } from 'utility-types';
const Hashids = require('hashids/cjs');
const hashids = new Hashids('TodoListItem');

export const todoListItemConnection: Resolver<
  ResolversTypes['TodoListItemConnection'],
  DeepPartial<TodoList>,
  Context
> = async (parent, args, context, info) => {
  const items = await context.todoListItemsLoader.load(parent.id!) ?? [];

  return {
    pageInfo: {
      hasNextPage: false
    },
    edges: items.map(item => ({
      cursor: hashids.encode(item.id),
      node: {
        ...item,
        id: item.id.toString(),
        createdAt: item.created_at,
        updatedAt: item.updated_at
      }
    }))
  };
};
