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

## Work In Progress / Roadmap 👷🏽‍♂

### Server

- [x] Create read Schema
- [x] Create stub read Resolvers
- [x] Add graphql-codegen
- [x] Add DB
- [x] Wire up read Resolvers to DB queries
- [ ] Create mutations
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
- [ ] View Lists
- [ ] View Items in Lists
- [ ] Create new Lists
- [ ] Create new Items in Lists
- [ ] Complete Items in Lists
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
