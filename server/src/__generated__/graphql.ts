import { GraphQLResolveInfo } from 'graphql';
import { Context } from '../context';
import { DeepPartial } from 'utility-types';
export type Maybe<T> = T | null | undefined;
export type RequireFields<T, K extends keyof T> = {
  [X in Exclude<keyof T, K>]?: T[X];
} &
  { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type CreateTodoListFields = {
  name: Scalars['String'];
};

export type CreateTodoListItemFields = {
  name?: Maybe<Scalars['String']>;
  done: Scalars['Boolean'];
};

export type DeleteTodoListFields = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodoList?: Maybe<TodoList>;
  updateTodoList?: Maybe<TodoList>;
  deleteTodoList?: Maybe<Success>;
  createTodoListItem?: Maybe<TodoListItem>;
};

export type MutationCreateTodoListArgs = {
  options: CreateTodoListFields;
};

export type MutationUpdateTodoListArgs = {
  options: UpdateTodoListFields;
};

export type MutationDeleteTodoListArgs = {
  options: DeleteTodoListFields;
};

export type MutationCreateTodoListItemArgs = {
  listId: Scalars['ID'];
  fields?: Maybe<CreateTodoListItemFields>;
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
  edges: Array<Maybe<TodoListEdge>>;
};

export type TodoListEdge = {
  __typename?: 'TodoListEdge';
  cursor: Scalars['String'];
  node?: Maybe<TodoList>;
};

export type TodoListItem = Node & {
  __typename?: 'TodoListItem';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  done: Scalars['Boolean'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type TodoListItemConnection = {
  __typename?: 'TodoListItemConnection';
  pageInfo: PageInfo;
  edges: Array<Maybe<TodoListItemEdge>>;
};

export type TodoListItemEdge = {
  __typename?: 'TodoListItemEdge';
  cursor: Scalars['String'];
  node?: Maybe<TodoListItem>;
};

export type UpdateTodoListFields = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn = (
  obj: any,
  info: GraphQLResolveInfo
) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<DeepPartial<Scalars['String']>>;
  TodoListConnection: ResolverTypeWrapper<DeepPartial<TodoListConnection>>;
  PageInfo: ResolverTypeWrapper<DeepPartial<PageInfo>>;
  Boolean: ResolverTypeWrapper<DeepPartial<Scalars['Boolean']>>;
  TodoListEdge: ResolverTypeWrapper<DeepPartial<TodoListEdge>>;
  TodoList: ResolverTypeWrapper<DeepPartial<TodoList>>;
  Node: ResolverTypeWrapper<DeepPartial<Node>>;
  ID: ResolverTypeWrapper<DeepPartial<Scalars['ID']>>;
  TodoListItemConnection: ResolverTypeWrapper<
    DeepPartial<TodoListItemConnection>
  >;
  TodoListItemEdge: ResolverTypeWrapper<DeepPartial<TodoListItemEdge>>;
  TodoListItem: ResolverTypeWrapper<DeepPartial<TodoListItem>>;
  Mutation: ResolverTypeWrapper<{}>;
  CreateTodoListFields: ResolverTypeWrapper<DeepPartial<CreateTodoListFields>>;
  UpdateTodoListFields: ResolverTypeWrapper<DeepPartial<UpdateTodoListFields>>;
  DeleteTodoListFields: ResolverTypeWrapper<DeepPartial<DeleteTodoListFields>>;
  Success: ResolverTypeWrapper<DeepPartial<Success>>;
  CreateTodoListItemFields: ResolverTypeWrapper<
    DeepPartial<CreateTodoListItemFields>
  >;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  String: DeepPartial<Scalars['String']>;
  TodoListConnection: DeepPartial<TodoListConnection>;
  PageInfo: DeepPartial<PageInfo>;
  Boolean: DeepPartial<Scalars['Boolean']>;
  TodoListEdge: DeepPartial<TodoListEdge>;
  TodoList: DeepPartial<TodoList>;
  Node: DeepPartial<Node>;
  ID: DeepPartial<Scalars['ID']>;
  TodoListItemConnection: DeepPartial<TodoListItemConnection>;
  TodoListItemEdge: DeepPartial<TodoListItemEdge>;
  TodoListItem: DeepPartial<TodoListItem>;
  Mutation: {};
  CreateTodoListFields: DeepPartial<CreateTodoListFields>;
  UpdateTodoListFields: DeepPartial<UpdateTodoListFields>;
  DeleteTodoListFields: DeepPartial<DeleteTodoListFields>;
  Success: DeepPartial<Success>;
  CreateTodoListItemFields: DeepPartial<CreateTodoListItemFields>;
}>;

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  createTodoList?: Resolver<
    Maybe<ResolversTypes['TodoList']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateTodoListArgs, 'options'>
  >;
  updateTodoList?: Resolver<
    Maybe<ResolversTypes['TodoList']>,
    ParentType,
    ContextType,
    RequireFields<MutationUpdateTodoListArgs, 'options'>
  >;
  deleteTodoList?: Resolver<
    Maybe<ResolversTypes['Success']>,
    ParentType,
    ContextType,
    RequireFields<MutationDeleteTodoListArgs, 'options'>
  >;
  createTodoListItem?: Resolver<
    Maybe<ResolversTypes['TodoListItem']>,
    ParentType,
    ContextType,
    RequireFields<MutationCreateTodoListItemArgs, 'listId'>
  >;
}>;

export type NodeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']
> = ResolversObject<{
  __resolveType: TypeResolveFn<
    'TodoList' | 'TodoListItem',
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type PageInfoResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']
> = ResolversObject<{
  hasNextPage?: Resolver<
    Maybe<ResolversTypes['Boolean']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: isTypeOfResolverFn;
}>;

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  allTodoLists?: Resolver<
    ResolversTypes['TodoListConnection'],
    ParentType,
    ContextType
  >;
  todoList?: Resolver<
    Maybe<ResolversTypes['TodoList']>,
    ParentType,
    ContextType,
    RequireFields<QueryTodoListArgs, 'id'>
  >;
  todoListItem?: Resolver<
    Maybe<ResolversTypes['TodoListItem']>,
    ParentType,
    ContextType,
    RequireFields<QueryTodoListItemArgs, 'id'>
  >;
}>;

export type SuccessResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Success'] = ResolversParentTypes['Success']
> = ResolversObject<{
  success?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn;
}>;

export type TodoListResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['TodoList'] = ResolversParentTypes['TodoList']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  items?: Resolver<
    ResolversTypes['TodoListItemConnection'],
    ParentType,
    ContextType
  >;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn;
}>;

export type TodoListConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['TodoListConnection'] = ResolversParentTypes['TodoListConnection']
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<
    Array<Maybe<ResolversTypes['TodoListEdge']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: isTypeOfResolverFn;
}>;

export type TodoListEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['TodoListEdge'] = ResolversParentTypes['TodoListEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<Maybe<ResolversTypes['TodoList']>, ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn;
}>;

export type TodoListItemResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['TodoListItem'] = ResolversParentTypes['TodoListItem']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  done?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: isTypeOfResolverFn;
}>;

export type TodoListItemConnectionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['TodoListItemConnection'] = ResolversParentTypes['TodoListItemConnection']
> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>;
  edges?: Resolver<
    Array<Maybe<ResolversTypes['TodoListItemEdge']>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: isTypeOfResolverFn;
}>;

export type TodoListItemEdgeResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['TodoListItemEdge'] = ResolversParentTypes['TodoListItemEdge']
> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  node?: Resolver<
    Maybe<ResolversTypes['TodoListItem']>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: isTypeOfResolverFn;
}>;

export type Resolvers<ContextType = Context> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers;
  PageInfo?: PageInfoResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Success?: SuccessResolvers<ContextType>;
  TodoList?: TodoListResolvers<ContextType>;
  TodoListConnection?: TodoListConnectionResolvers<ContextType>;
  TodoListEdge?: TodoListEdgeResolvers<ContextType>;
  TodoListItem?: TodoListItemResolvers<ContextType>;
  TodoListItemConnection?: TodoListItemConnectionResolvers<ContextType>;
  TodoListItemEdge?: TodoListItemEdgeResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
