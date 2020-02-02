import {
  TodoList,
  todoListConnection,
  todoList,
  createTodoList
} from './TodoList/TodoList.resolver';
import { Resolvers } from './__generated__/graphql';
import { todoListItem } from './TodoListItem/TodoListItem.resolver';

const resolvers: Resolvers = {
  Query: {
    version: () => '1.0.0',
    allTodoLists: todoListConnection,
    todoList,
    todoListItem
  },
  Mutation: {
    createTodoList
  },
  TodoList
};

export default resolvers;
