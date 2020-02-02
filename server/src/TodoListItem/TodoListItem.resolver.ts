import {
  MutationResolvers,
  QueryResolvers,
  Resolver,
  ResolversTypes,
  TodoList
} from '../__generated__/graphql';
import { Context } from '../context';
import { DeepPartial } from 'utility-types';
import { Item } from '../db/types/Items';
import { findOne } from './TodoListItem.service';
import { findOne as findOneList } from '../TodoList/TodoList.service';
import knex from '../db';
import { ApolloError } from 'apollo-server';
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
      node: dbToGraphQL(item)!
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

export const createTodoListItem: MutationResolvers['createTodoListItem'] = async (
  parent,
  args
) => {
  const list = await findOneList({ where: { id: +args.listId } });
  if (!list) {
    throw new ApolloError(
      `Can't add to list id:${args.listId} as it doesn't exist`,
      '404'
    );
  }

  const ids = await knex('items').insert({
    ...args.fields,
    list_id: args.listId
  });

  return dbToGraphQL(await findOne({ where: { id: ids[0] } }));
};

export const deleteTodoListItem: MutationResolvers['deleteTodoListItem'] = async (
  parent,
  args
) => {
  const result = await knex('items')
    .where({ id: args.id })
    .del();

  return { success: result > 0 };
};

export const deleteTodoListItemsDone: MutationResolvers['deleteTodoListItemsDone'] = async (
  parent,
  args
) => {
  const result = await knex('items')
    .where({ list_id: args.listId, done: true })
    .del();

  return { success: result > 0 };
};

export const updateTodoListItem: MutationResolvers['updateTodoListItem'] = async (
  parent,
  args
) => {
  const result = await knex('items')
    .where({ id: args.id })
    .update({ ...args.fields, updated_at: knex.fn.now() });

  if (result === 0) {
    throw new ApolloError(
      `Can't find item with id:${args.id} to update`,
      '404'
    );
  }

  return dbToGraphQL(await findOne({ where: { id: +args.id } }))!;
};

const dbToGraphQL = (item: Item | null) =>
  item && {
    ...item,
    id: item.id?.toString(),
    createdAt: item.created_at,
    updatedAt: item.updated_at,
    listId: item.list_id.toString()
  };

export const TodoListItemQuery = {
  todoListItem
};

export const TodoListItemMutation = {
  createTodoListItem,
  updateTodoListItem,
  deleteTodoListItem,
  deleteTodoListItemsDone
};
