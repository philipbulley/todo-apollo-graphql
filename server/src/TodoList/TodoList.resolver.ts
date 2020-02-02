import { todoListItemConnection } from '../TodoListItem/TodoListItem.resolver';
import { MutationResolvers, QueryResolvers } from '../__generated__/graphql';
import knex from './../db';
import { List } from '../db/types/Lists';
import { findOne, findMany } from './TodoList.service';

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
  const list: List | null = await findOne(args);

  return dbToGraphQL(list);
};

export const createTodoList: MutationResolvers['createTodoList'] = async (
  parent,
  args
) => {
  console.log(args);

  const ids = await knex('lists').insert({
    name: args.options.name
  });

  return dbToGraphQL(await findOne({ id: ids[0] }));
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
