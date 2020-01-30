import { Resolver, ResolversTypes } from '../__generated__/graphql';

export const TodoListItemConnection: Resolver<ResolversTypes['TodoListItemConnection']> = (
  source: any
) => {
  console.log(`todo: fetch list with id ${source.id}`);
  return {
    pageInfo: {
      hasNextPage: false
    },
    edges: [
      {
        cursor: 'aaa',
        node: { id: '9001', name: 'Dummy Item Name One', done: true }
      },
      {
        cursor: 'bbb',
        node: { id: '9001', name: 'Dummy Item Name Two', done: false }
      }
    ]
  };
};
