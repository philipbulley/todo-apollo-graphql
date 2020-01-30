import { GraphQLResolveInfo } from 'graphql';
import { DeepPartial } from 'utility-types';
export type Maybe<T> = T | null | undefined;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Node = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
};

export type PageInfo = {
   __typename?: 'PageInfo',
  hasNextPage?: Maybe<Scalars['Boolean']>,
};

export type Query = {
   __typename?: 'Query',
  version?: Maybe<Scalars['String']>,
  allTodoLists: TodoListConnection,
};

export type TodoList = Node & {
   __typename?: 'TodoList',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  items: TodoListItemConnection,
};

export type TodoListConnection = {
   __typename?: 'TodoListConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TodoListEdge>>,
};

export type TodoListEdge = {
   __typename?: 'TodoListEdge',
  cursor: Scalars['String'],
  node?: Maybe<TodoList>,
};

export type TodoListItem = Node & {
   __typename?: 'TodoListItem',
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  done: Scalars['Boolean'],
};

export type TodoListItemConnection = {
   __typename?: 'TodoListItemConnection',
  pageInfo: PageInfo,
  edges: Array<Maybe<TodoListItemEdge>>,
};

export type TodoListItemEdge = {
   __typename?: 'TodoListItemEdge',
  cursor: Scalars['String'],
  node?: Maybe<TodoListItem>,
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

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn = (obj: any, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  String: ResolverTypeWrapper<DeepPartial<Scalars['String']>>,
  TodoListConnection: ResolverTypeWrapper<DeepPartial<TodoListConnection>>,
  PageInfo: ResolverTypeWrapper<DeepPartial<PageInfo>>,
  Boolean: ResolverTypeWrapper<DeepPartial<Scalars['Boolean']>>,
  TodoListEdge: ResolverTypeWrapper<DeepPartial<TodoListEdge>>,
  TodoList: ResolverTypeWrapper<DeepPartial<TodoList>>,
  Node: ResolverTypeWrapper<DeepPartial<Node>>,
  ID: ResolverTypeWrapper<DeepPartial<Scalars['ID']>>,
  TodoListItemConnection: ResolverTypeWrapper<DeepPartial<TodoListItemConnection>>,
  TodoListItemEdge: ResolverTypeWrapper<DeepPartial<TodoListItemEdge>>,
  TodoListItem: ResolverTypeWrapper<DeepPartial<TodoListItem>>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  String: DeepPartial<Scalars['String']>,
  TodoListConnection: DeepPartial<TodoListConnection>,
  PageInfo: DeepPartial<PageInfo>,
  Boolean: DeepPartial<Scalars['Boolean']>,
  TodoListEdge: DeepPartial<TodoListEdge>,
  TodoList: DeepPartial<TodoList>,
  Node: DeepPartial<Node>,
  ID: DeepPartial<Scalars['ID']>,
  TodoListItemConnection: DeepPartial<TodoListItemConnection>,
  TodoListItemEdge: DeepPartial<TodoListItemEdge>,
  TodoListItem: DeepPartial<TodoListItem>,
}>;

export type NodeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = ResolversObject<{
  __resolveType: TypeResolveFn<'TodoList' | 'TodoListItem', ParentType, ContextType>,
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
}>;

export type PageInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PageInfo'] = ResolversParentTypes['PageInfo']> = ResolversObject<{
  hasNextPage?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  allTodoLists?: Resolver<ResolversTypes['TodoListConnection'], ParentType, ContextType>,
}>;

export type TodoListResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoList'] = ResolversParentTypes['TodoList']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  items?: Resolver<ResolversTypes['TodoListItemConnection'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type TodoListConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoListConnection'] = ResolversParentTypes['TodoListConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['TodoListEdge']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type TodoListEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoListEdge'] = ResolversParentTypes['TodoListEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['TodoList']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type TodoListItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoListItem'] = ResolversParentTypes['TodoListItem']> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  done?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type TodoListItemConnectionResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoListItemConnection'] = ResolversParentTypes['TodoListItemConnection']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PageInfo'], ParentType, ContextType>,
  edges?: Resolver<Array<Maybe<ResolversTypes['TodoListItemEdge']>>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type TodoListItemEdgeResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoListItemEdge'] = ResolversParentTypes['TodoListItemEdge']> = ResolversObject<{
  cursor?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  node?: Resolver<Maybe<ResolversTypes['TodoListItem']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn,
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Node?: NodeResolvers,
  PageInfo?: PageInfoResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  TodoList?: TodoListResolvers<ContextType>,
  TodoListConnection?: TodoListConnectionResolvers<ContextType>,
  TodoListEdge?: TodoListEdgeResolvers<ContextType>,
  TodoListItem?: TodoListItemResolvers<ContextType>,
  TodoListItemConnection?: TodoListItemConnectionResolvers<ContextType>,
  TodoListItemEdge?: TodoListItemEdgeResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
