# Database

We're using a SQLite 3 Database with [Knex](https://knexjs.org/) as an ORM.

* `development` uses a file based DB
* `test` uses an in memory DB

## References

1. [Migrations & Seeding](https://gist.github.com/NigelEarle/70db130cc040cc2868555b29a0278261)
1. [Database Migrations with Knex](http://perkframework.com/v1/guides/database-migrations-knex.html)

## Setup

#### Before running any migrations:

```
$ cd server/src/db
```

#### Create file-based database with seed data

```
rm -f todo.db.sqlite3 && knex migrate:latest && knex seed:run
```

## Maintenance

### Migrations

Migrations are intended to create and alter the schema of the DB. They could also transform the data within the DB.

#### Create a new migrations file stub

```
$ knex migrate:make decription_of_migration
```

Now populate the new file with the changes you wish to make to the database.

#### Update Database to latest migration

This can be done to fast forward your database, or if no database file exists, to create it. It essentially runs the code in `exports.up` within each migration file not already run against the database.

```
$ knex migrate:latest
```

#### Rollback a migration

This will run the code in `exports.down`.

```
$ knex migrate:rollback
```

### Seeding

Seeds add rows to the tables, so we have data to work with initially.

#### Create a seed stub file

```
$ knex seed:make name_of_seed_file
```

Unlike migrations, all when seeds are run, all of the files are executed. They're executed in alphabetical order, so it can be useful to prefix the filename with `01`, `02`, etc (ie. `01_lists`, `02_items`).

### Run seed files

```
$ knex seed:run
```

