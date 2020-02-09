import { ListQuery } from '../__generated__/graphql';

export const GROCERIES_LIST: ListQuery = {
  todoList: {
    __typename: 'TodoList',
    id: '1',
    name: 'Groceries',
    createdAt: '2019-05-25 13:33:15',
    updatedAt: '2019-06-10 21:33:23',
    items: {
      __typename: 'TodoListItemConnection',
      pageInfo: {
        __typename: 'PageInfo',
        hasNextPage: false
      },
      edges: [
        {
          __typename: 'TodoListItemEdge',
          cursor: 'Lb',
          node: {
            __typename: 'TodoListItem',
            id: '1',
            name: 'Bananas',
            done: false,
            createdAt: '2019-06-01 03:12:15',
            updatedAt: '2019-06-01 13:23:15'
          }
        },
        {
          __typename: 'TodoListItemEdge',
          cursor: 'gm',
          node: {
            __typename: 'TodoListItem',
            id: '2',
            name: 'Apples',
            done: false,
            createdAt: '2019-07-02 04:13:15',
            updatedAt: '2019-07-02 14:34:15'
          }
        },
        {
          __typename: 'TodoListItemEdge',
          cursor: 'kb',
          node: {
            __typename: 'TodoListItem',
            id: '3',
            name: 'Bangers',
            done: false,
            createdAt: '2019-08-03 05:14:15',
            updatedAt: '2019-08-03 15:54:15'
          }
        },
        {
          __typename: 'TodoListItemEdge',
          cursor: '9d',
          node: {
            __typename: 'TodoListItem',
            id: '4',
            name: 'Mash',
            done: false,
            createdAt: '2019-09-04 10:31:15',
            updatedAt: '2019-09-24 16:54:13'
          }
        },
        {
          __typename: 'TodoListItemEdge',
          cursor: 'lb',
          node: {
            __typename: 'TodoListItem',
            id: '5',
            name: 'Pizza',
            done: false,
            createdAt: '2019-10-05 11:42:15',
            updatedAt: '2019-10-05 17:31:15'
          }
        }
      ]
    }
  }
};
