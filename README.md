# Apollo GraphQL todo app

👷🏽‍♂️Work in progress!

Inspired by [this tweet](https://twitter.com/mattrothenberg/status/1219623191712272384), this is a todo app based on Apollo GraphQL. It captures the way I like to use the GraphQL stack and will serve as a reference for me for the future (in case I spend the next year working on a Redux app!).

I'll probably build others eventually, but starting with Apollo GraphQL as it's my favourite stack at present.

## Quick Start 🏃🏽‍♀️

This repo uses Yarn Workspaces and is set up so that the following should get things running:

```
$ yarn install
$ yarn setup
$ yarn start
```

## Features

There are two distinct parts to this demo app, the client and the server:

### Client

- Demonstrates [graphql-codegen](https://graphql-code-generator.com/) to automatically generate TypeScript types based on the remote schema
  - Data received and sent is fully typed
  - Auto generates React Hooks for Apollo Queries (queries are baked-in)

### Server

- GraphQL Schema-first development approach
- Modular schema based around features, extending `Query` and `Mutation`
- Demonstrates a solution for the GraphQL `n+1` problem using [DataLoader](https://www.npmjs.com/package/dataloader). See `todoListItemsLoader`.
- Uses [graphql-codegen](https://graphql-code-generator.com/) to automatically generate types (based on the schema) for use in our resolvers.
- Uses [SQLite 3](https://www.npmjs.com/package/sqlite3) and [Knex](https://www.npmjs.com/package/knex) for light-weight persistent storage
  - Demonstrates migrations and seed data
  - Transactions

## Work In Progress / Roadmap 👷🏽‍♂

### Server

- [x] Create read Schema
- [x] Create stub read Resolvers
- [x] Add graphql-codegen
- [x] Add DB
- [x] Wire up read Resolvers to DB queries
- [x] Create mutations
  - [x] Create List
  - [x] Delete List (and child items)
  - [x] Update List
  - [x] Create Item
  - [x] Delete Item
  - [x] Update Item
  - [x] Delete "Done" Items
- [ ] Complete pagination implementation

### Client

- [x] Add Apollo Client
- [x] Add graphql-codegen
- [x] View Lists
- [x] View Items in Lists
- [ ] Create new Lists
- [ ] Create new Items in Lists
- [x] Complete Items in Lists
- [ ] Delete Lists
- [ ] Delete Items in Lists
- [ ] Update List name
- [ ] Update Item name

## Tech

- Apollo Server & Apollo Client
- Sqlite3 / Knex
- GraphQL Codegen
- TypeScript
- React / react-scripts
- Prettier / pretty-quick / husky
