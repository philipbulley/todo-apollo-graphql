import todoListItemsLoader from './dataLoaders/todoListItemsLoader';

const context = () => ({
  todoListItemsLoader
});

export type Context = ReturnType<typeof context>;

export default context;
