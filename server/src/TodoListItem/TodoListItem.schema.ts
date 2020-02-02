import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    todoListItem(id: ID!): TodoListItem
  }

  extend type Mutation {
    createTodoListItem(listId: ID!, fields: TodoListItemFields): TodoListItem
    updateTodoListItem(id: ID!, fields: TodoListItemFields!): TodoListItem
    deleteTodoListItem(id: ID!): Success

    """
    Deletes all items marked as \`done\` from with the specified list
    """
    deleteTodoListItemsDone(listId: ID!): Success
  }

  input TodoListItemFields {
    name: String
    done: Boolean
  }

  type TodoListItemConnection {
    pageInfo: PageInfo!
    edges: [TodoListItemEdge!]!
  }

  type TodoListItemEdge {
    cursor: String!
    node: TodoListItem!
  }

  type TodoListItem implements Node {
    id: ID!
    listId: String!
    name: String
    done: Boolean!
    createdAt: String!
    updatedAt: String!
  }
`;
