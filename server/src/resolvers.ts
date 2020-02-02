import {
  TodoList,
  todoListConnection,
  todoList,
  createTodoList
} from './TodoList/TodoList.resolver';
import { Resolvers } from './__generated__/graphql';

const resolvers: Resolvers = {
  Query: {
    version: () => '1.0.0',
    allTodoLists: todoListConnection,
    todoList
  },
  Mutation: {
    createTodoList
  },
  TodoList
};

export default resolvers;
