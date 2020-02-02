import { TodoList, todoListConnection, todoList } from './TodoList/TodoList.resolver';
import { Resolvers } from './__generated__/graphql';

const resolvers: Resolvers = {
  Query: {
    version: () => '1.0.0',
    allTodoLists: todoListConnection,
    todoList: todoList
  },
  TodoList
};

export default resolvers;
