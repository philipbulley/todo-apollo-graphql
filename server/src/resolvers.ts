import { TodoList, TodoListConnection } from './TodoList/TodoList.resolver';

const resolvers = {
  Query: {
    version: () => '1.0.0',
    allTodoLists: TodoListConnection
  },
  TodoList
};

export default resolvers;
