import { TodoList, TodoListConnection } from './TodoList/TodoList.resolver';
import { Resolvers } from './__generated__/graphql';

const resolvers: Resolvers = {
  Query: {
    version: () => '1.0.0',
    allTodoLists: TodoListConnection
  },
  TodoList
};

export default resolvers;
