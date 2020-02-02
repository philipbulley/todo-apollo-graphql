import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    todoListItem(id: ID!): TodoListItem
  }

  extend type Mutation {
    createTodoListItem(
      listId: ID!
      fields: CreateTodoListItemFields
    ): TodoListItem
  }

  input CreateTodoListItemFields {
    name: String
    done: Boolean!
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
