import { gql } from 'apollo-server';

export default gql`
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
  }
`;
