import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodoList?: Maybe<TodoList>;
  updateTodoList?: Maybe<TodoList>;
  deleteTodoList?: Maybe<Success>;
  createTodoListItem?: Maybe<TodoListItem>;
  updateTodoListItem?: Maybe<TodoListItem>;
  deleteTodoListItem?: Maybe<Success>;
  deleteTodoListItemsDone?: Maybe<Success>;
};

export type MutationCreateTodoListArgs = {
  fields: TodoListFields;
};

export type MutationUpdateTodoListArgs = {
  id: Scalars['ID'];
  fields: TodoListFields;
};

export type MutationDeleteTodoListArgs = {
  id: Scalars['ID'];
};

export type MutationCreateTodoListItemArgs = {
  listId: Scalars['ID'];
  fields?: Maybe<TodoListItemFields>;
};

export type MutationUpdateTodoListItemArgs = {
  id: Scalars['ID'];
  fields: TodoListItemFields;
};

export type MutationDeleteTodoListItemArgs = {
  id: Scalars['ID'];
};

export type MutationDeleteTodoListItemsDoneArgs = {
  listId: Scalars['ID'];
};

export type Node = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  hasNextPage?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  version?: Maybe<Scalars['String']>;
  allTodoLists: TodoListConnection;
  todoList?: Maybe<TodoList>;
  todoListItem?: Maybe<TodoListItem>;
};

export type QueryTodoListArgs = {
  id: Scalars['ID'];
};

export type QueryTodoListItemArgs = {
  id: Scalars['ID'];
};

export type Success = {
  __typename?: 'Success';
  success?: Maybe<Scalars['Boolean']>;
};

export type TodoList = Node & {
  __typename?: 'TodoList';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  items: TodoListItemConnection;
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TodoListConnection = {
  __typename?: 'TodoListConnection';
  pageInfo: PageInfo;
  edges: Array<TodoListEdge>;
};

export type TodoListEdge = {
  __typename?: 'TodoListEdge';
  cursor: Scalars['String'];
  node: TodoList;
};

export type TodoListFields = {
  name: Scalars['String'];
};

export type TodoListItem = Node & {
  __typename?: 'TodoListItem';
  id: Scalars['ID'];
  listId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  done: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TodoListItemConnection = {
  __typename?: 'TodoListItemConnection';
  pageInfo: PageInfo;
  edges: Array<TodoListItemEdge>;
};

export type TodoListItemEdge = {
  __typename?: 'TodoListItemEdge';
  cursor: Scalars['String'];
  node: TodoListItem;
};

export type TodoListItemFields = {
  name?: Maybe<Scalars['String']>;
  done?: Maybe<Scalars['Boolean']>;
};

export type ListQueryVariables = {
  id: Scalars['ID'];
};

export type ListQuery = { __typename?: 'Query' } & {
  todoList: Maybe<
    { __typename?: 'TodoList' } & Pick<
      TodoList,
      'id' | 'name' | 'createdAt' | 'updatedAt'
    > & {
        items: { __typename?: 'TodoListItemConnection' } & {
          pageInfo: { __typename?: 'PageInfo' } & Pick<PageInfo, 'hasNextPage'>;
          edges: Array<
            { __typename?: 'TodoListItemEdge' } & Pick<
              TodoListItemEdge,
              'cursor'
            > & {
                node: { __typename?: 'TodoListItem' } & Pick<
                  TodoListItem,
                  'id' | 'name' | 'done' | 'createdAt' | 'updatedAt'
                >;
              }
          >;
        };
      }
  >;
};

export type UpdateListItemMutationVariables = {
  id: Scalars['ID'];
  fields: TodoListItemFields;
};

export type UpdateListItemMutation = { __typename?: 'Mutation' } & {
  updateTodoListItem: Maybe<
    { __typename?: 'TodoListItem' } & Pick<
      TodoListItem,
      'id' | 'name' | 'done' | 'createdAt' | 'updatedAt'
    >
  >;
};

export type ListsQueryVariables = {};

export type ListsQuery = { __typename?: 'Query' } & Pick<Query, 'version'> & {
    allTodoLists: { __typename?: 'TodoListConnection' } & {
      pageInfo: { __typename?: 'PageInfo' } & Pick<PageInfo, 'hasNextPage'>;
      edges: Array<
        { __typename?: 'TodoListEdge' } & Pick<TodoListEdge, 'cursor'> & {
            node: { __typename?: 'TodoList' } & Pick<
              TodoList,
              'id' | 'name' | 'createdAt' | 'updatedAt'
            >;
          }
      >;
    };
  };

export const ListDocument = gql`
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

/**
 * __useListQuery__
 *
 * To run a query within a React component, call `useListQuery` and pass it any options that fit your needs.
 * When your component renders, `useListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useListQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<ListQuery, ListQueryVariables>
) {
  return ApolloReactHooks.useQuery<ListQuery, ListQueryVariables>(
    ListDocument,
    baseOptions
  );
}
export function useListLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ListQuery,
    ListQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ListQuery, ListQueryVariables>(
    ListDocument,
    baseOptions
  );
}
export type ListQueryHookResult = ReturnType<typeof useListQuery>;
export type ListLazyQueryHookResult = ReturnType<typeof useListLazyQuery>;
export type ListQueryResult = ApolloReactCommon.QueryResult<
  ListQuery,
  ListQueryVariables
>;
export const UpdateListItemDocument = gql`
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
export type UpdateListItemMutationFn = ApolloReactCommon.MutationFunction<
  UpdateListItemMutation,
  UpdateListItemMutationVariables
>;

/**
 * __useUpdateListItemMutation__
 *
 * To run a mutation, you first call `useUpdateListItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateListItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateListItemMutation, { data, loading, error }] = useUpdateListItemMutation({
 *   variables: {
 *      id: // value for 'id'
 *      fields: // value for 'fields'
 *   },
 * });
 */
export function useUpdateListItemMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateListItemMutation,
    UpdateListItemMutationVariables
  >
) {
  return ApolloReactHooks.useMutation<
    UpdateListItemMutation,
    UpdateListItemMutationVariables
  >(UpdateListItemDocument, baseOptions);
}
export type UpdateListItemMutationHookResult = ReturnType<
  typeof useUpdateListItemMutation
>;
export type UpdateListItemMutationResult = ApolloReactCommon.MutationResult<
  UpdateListItemMutation
>;
export type UpdateListItemMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateListItemMutation,
  UpdateListItemMutationVariables
>;
export const ListsDocument = gql`
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
        }
      }
    }
  }
`;

/**
 * __useListsQuery__
 *
 * To run a query within a React component, call `useListsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useListsQuery({
 *   variables: {
 *   },
 * });
 */
export function useListsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    ListsQuery,
    ListsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<ListsQuery, ListsQueryVariables>(
    ListsDocument,
    baseOptions
  );
}
export function useListsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    ListsQuery,
    ListsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<ListsQuery, ListsQueryVariables>(
    ListsDocument,
    baseOptions
  );
}
export type ListsQueryHookResult = ReturnType<typeof useListsQuery>;
export type ListsLazyQueryHookResult = ReturnType<typeof useListsLazyQuery>;
export type ListsQueryResult = ApolloReactCommon.QueryResult<
  ListsQuery,
  ListsQueryVariables
>;
