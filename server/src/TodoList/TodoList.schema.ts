import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    allTodoLists: TodoListConnection!
    todoList(id: ID!): TodoList
  }

  extend type Mutation {
    createTodoList(options: CreateTodoListFields!): TodoList
    updateTodoList(options: UpdateTodoListFields!): TodoList
    deleteTodoList(options: DeleteTodoListFields!): Success
  }

  input CreateTodoListFields {
    name: String!
  }

  input UpdateTodoListFields {
    id: ID!
    name: String
  }

  input DeleteTodoListFields {
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
