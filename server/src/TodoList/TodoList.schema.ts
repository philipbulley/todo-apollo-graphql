import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    allTodoLists: TodoListConnection!
    todoList(id: ID!): TodoList
  }

  extend type Mutation {
    createTodoList(options: CreateTodoListOptions!): TodoList
    updateTodoList(options: UpdateTodoListOptions!): TodoList
    deleteTodoList(options: DeleteTodoListOptions!): Success
  }

  input CreateTodoListOptions {
    name: String!
  }

  input UpdateTodoListOptions {
    id: ID!
    name: String
  }

  input DeleteTodoListOptions {
    id: ID!
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
