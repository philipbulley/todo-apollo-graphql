import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    allTodoLists: TodoListConnection!
    todoList(id: ID!): TodoList
  }

  type TodoListConnection {
    pageInfo: PageInfo!
    edges: [TodoListEdge]!
  }

  type TodoListEdge {
    cursor: String!
    node: TodoList
  }

  type TodoList implements Node {
    id: ID!
    name: String
    items: TodoListItemConnection!
    createdAt: String!
    updatedAt: String!
  }
`;
