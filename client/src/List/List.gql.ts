import { gql } from 'apollo-boost';

export default gql`
  query List($id: ID!) {
    todoList(id: $id) {
      id
      name
      createdAt
      updatedAt
      items {
        pageInfo {
          hasNextPage
        }
        edges {
          cursor
          node {
            id
            name
            done
            createdAt
            updatedAt
          }
        }
      }
    }
  }
`;

export const updateListItem = gql`
  mutation UpdateListItem($id: ID!, $fields: TodoListItemFields!) {
    updateTodoListItem(id: $id, fields: $fields) {
      id
      name
      done
      createdAt
      updatedAt
    }
  }
`;
