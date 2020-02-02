import todoListItemsLoader from './dataLoaders/todoListItemsLoader';

const context = () => ({
  todoListItemsLoader: todoListItemsLoader()
});

export type Context = ReturnType<typeof context>;

export default context;
