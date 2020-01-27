import TodoList from './TodoList/TodoList.resolver';

const resolvers = {
  Query: {
    version: () => '1.0.0'
  },
  TodoList
};

export default resolvers;
