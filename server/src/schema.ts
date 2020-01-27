import { gql, mergeSchemas } from 'apollo-server';
import TodoList from './TodoList/TodoList.schema';
import resolvers from './resolvers';

const root = gql`
  type Query {
    version: String
  }
`;

const schema = async () =>
  mergeSchemas({
    schemas: [root, TodoList],
    resolvers
  });

export default schema;
