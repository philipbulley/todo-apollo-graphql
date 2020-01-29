export const TodoListItemConnection = (source: any) => {
  console.log(`todo: fetch list with id ${source.id}`);
  return {
    pageInfo: {
      hasNextPage: false
    },
    edges: [
      {
        cursor: 'aaa',
        node: { id: '9001', name: 'Dummy Item Name One' }
      },
      {
        cursor: 'bbb',
        node: { id: '9001', name: 'Dummy Item Name Two' }
      }
    ]
  };
};

// export const TodoListItemConnection = {
//   pageInfo: () => ({
//     hasNextPage: false
//   }),
//   edges: () => [
//     {
//       cursor: 'aaa',
//       node: { id: '9001', name: 'Dummy Item Name One' }
//     },
//     {
//       cursor: 'bbb',
//       node: { id: '9001', name: 'Dummy Item Name Two' }
//     }
//   ]
// };
