import { ListQuery } from '../__generated__/graphql';

export const GROCERIES_LIST: ListQuery = {
  todoList: {
    id: '1',
    name: 'Groceries',
    createdAt: '2019-05-25 13:33:15',
    updatedAt: '2019-06-10 21:33:23',
    items: {
      pageInfo: {
        hasNextPage: false
      },
      edges: [
        {
          cursor: 'Lb',
          node: {
            id: '1',
            name: 'Bananas',
            done: false,
            createdAt: '2019-06-01 03:12:15',
            updatedAt: '2019-06-01 13:23:15'
          }
        },
        {
          cursor: 'gm',
          node: {
            id: '2',
            name: 'Apples',
            done: false,
            createdAt: '2019-07-02 04:13:15',
            updatedAt: '2019-07-02 14:34:15'
          }
        },
        {
          cursor: 'kb',
          node: {
            id: '3',
            name: 'Bangers',
            done: false,
            createdAt: '2019-08-03 05:14:15',
            updatedAt: '2019-08-03 15:54:15'
          }
        },
        {
          cursor: '9d',
          node: {
            id: '4',
            name: 'Mash',
            done: false,
            createdAt: '2019-09-04 10:31:15',
            updatedAt: '2019-09-24 16:54:13'
          }
        },
        {
          cursor: 'lb',
          node: {
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
