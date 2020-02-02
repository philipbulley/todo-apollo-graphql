import { gql, mergeSchemas } from 'apollo-server';
import TodoList from './TodoList/TodoList.schema';
import TodoListItem from './TodoListItem/TodoListItem.schema';
import resolvers from './resolvers';

const root = gql`
  type Query {
    version: String
  }

  type Mutation

  interface Node {
    id: ID!
    name: String
  }

  type PageInfo {
    hasNextPage: Boolean
  }

  type Success {
    success: Boolean
  }
`;

const schema = async () =>
  mergeSchemas({
    schemas: [root, TodoList, TodoListItem],

    resolvers
  });

export default schema;
