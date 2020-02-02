import { todoListItemConnection } from '../TodoListItem/TodoListItem.resolver';
import { MutationResolvers, QueryResolvers } from '../__generated__/graphql';
import knex from './../db';
import { List } from '../db/types/Lists';
import { findOne, findMany } from './TodoList.service';
import Knex from 'knex';
import { ApolloError } from 'apollo-server';

const Hashids = require('hashids/cjs');
const hashids = new Hashids('TodoList');

export const todoListConnection: QueryResolvers['allTodoLists'] = async () => {
  const lists = await findMany();

  return {
    pageInfo: {
      hasNextPage: false
    },
    edges: lists.map((list: List) => ({
      cursor: hashids.encode(list.id),
      node: dbToGraphQL(list)
    }))
  };
};

export const todoList: QueryResolvers['todoList'] = async (parent, args) => {
  const list: List | null = await findOne({ where: args });

  return dbToGraphQL(list);
};

export const createTodoList: MutationResolvers['createTodoList'] = async (
  parent,
  args
) => {
  const ids = await knex('lists').insert({
    name: args.fields.name
  });

  return dbToGraphQL(await findOne({ where: { id: ids[0] } }));
};

export const deleteTodoList: MutationResolvers['deleteTodoList'] = async (
  parent,
  args
) => {
  const result = await knex.transaction(async (trx: Knex.Transaction) => {
    await trx
      .table('items')
      .where({ list_id: args.id })
      .del();
    await trx
      .table('lists')
      .where({ id: args.id })
      .del();
    return true;
  });

  return { success: result };
};

export const updateTodoList: MutationResolvers['updateTodoList'] = async (
  parent,
  args
) => {
  const result = await knex('lists')
    .where({ id: args.id })
    .update({ ...args.fields, updated_at: knex.fn.now() });

  if (result === 0) {
    throw new ApolloError(
      `Can't find list with id:${args.id} to update`,
      '404'
    );
  }

  return dbToGraphQL(await findOne({ where: { id: +args.id } }));
};

export const TodoList = {
  items: todoListItemConnection
};

const dbToGraphQL = (list: List | null) =>
  list && {
    ...list,
    id: list.id.toString(),
    createdAt: list.created_at,
    updatedAt: list.updated_at
  };

export const TodoListQuery = {
  allTodoLists: todoListConnection,
  todoList
};

export const TodoListMutation = {
  createTodoList,
  updateTodoList,
  deleteTodoList
};
