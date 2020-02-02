import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    todoListItem(id: ID!): TodoListItem
  }

  type TodoListItemConnection {
    pageInfo: PageInfo!
    edges: [TodoListItemEdge]!
  }

  type TodoListItemEdge {
    cursor: String!
    node: TodoListItem
  }

  type TodoListItem implements Node {
    id: ID!
    name: String
    done: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;
