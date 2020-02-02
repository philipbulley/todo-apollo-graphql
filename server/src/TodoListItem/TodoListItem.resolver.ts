import {
  QueryResolvers,
  Resolver,
  ResolversTypes,
  TodoList
} from '../__generated__/graphql';
import { Context } from '../context';
import { DeepPartial } from 'utility-types';
import { Item } from '../db/types/Items';
import { findOne } from './TodoListItem.service';
const Hashids = require('hashids/cjs');
const hashids = new Hashids('TodoListItem');

export const todoListItemConnection: Resolver<
  ResolversTypes['TodoListItemConnection'],
  DeepPartial<TodoList>,
  Context
> = async (parent, args, context, info) => {
  const items = (await context.todoListItemsLoader.load(parent.id!)) ?? [];

  return {
    pageInfo: {
      hasNextPage: false
    },
    edges: items.map(item => ({
      cursor: hashids.encode(item.id),
      node: dbToGraphQL(item)
    }))
  };
};

export const todoListItem: QueryResolvers['todoListItem'] = async (
  parent,
  args
) => {
  const item: Item | null = await findOne({ where: args });

  return dbToGraphQL(item);
};

const dbToGraphQL = (item: Item | null) =>
  item && {
    ...item,
    id: item.id.toString(),
    createdAt: item.created_at,
    updatedAt: item.updated_at
  };
