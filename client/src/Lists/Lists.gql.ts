import { gql } from 'apollo-boost';

export default gql`
  query Lists {
    version
    allTodoLists {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          createdAt
          updatedAt
          #          items {
          #            pageInfo {
          #              hasNextPage
          #            }
          #            edges {
          #              cursor
          #              node {
          #                id
          #                listId
          #                name
          #                done
          #              }
          #            }
          #          }
        }
      }
    }
  }
`;
