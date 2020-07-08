import { gql } from 'apollo-boost';

export default gql`
  mutation CreateTodoList($fields: TodoListFields!) {
    createTodoList(fields: $fields) {
      __typename
      id
      name
      createdAt
      updatedAt
    }
  }
`;
