import {
  TodoList,
  TodoListQuery,
  TodoListMutation
} from './TodoList/TodoList.resolver';
import { Resolvers } from './__generated__/graphql';
import {
  TodoListItemMutation,
  TodoListItemQuery
} from './TodoListItem/TodoListItem.resolver';

const resolvers: Resolvers = {
  Query: {
    version: () => '1.0.0',
    ...TodoListQuery,
    ...TodoListItemQuery
  },
  Mutation: {
    ...TodoListMutation,
    ...TodoListItemMutation
  },
  TodoList
};

export default resolvers;
