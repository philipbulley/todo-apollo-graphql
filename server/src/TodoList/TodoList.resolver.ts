import { TodoListItemConnection } from '../TodoListItem/TodoListItem.resolver';

export const TodoListConnection = () => ({
  pageInfo: {
    hasNextPage: false
  },
  edges: [
    {
      cursor: 'abc',
      node: { id: '001', name: 'Dummy List Name One' }
    },
    {
      cursor: 'def',
      node: { id: '002', name: 'Dummy List Name Two' }
    }
  ]
});

export const TodoList = {
  items: TodoListItemConnection
};
