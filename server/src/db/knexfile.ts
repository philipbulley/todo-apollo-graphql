module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/todo.db.sqlite3`
    },
    migrations: {
      extension: 'ts',
      directory: `${__dirname}/migrations`
    },
    seeds: {
      extension: 'ts',
      directory: `${__dirname}/seeds`
    },
    useNullAsDefault: true,
    debug: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: `:memory:`
    },
    migrations: {
      extension: 'ts',
      directory: `${__dirname}/migrations`
    },
    seeds: {
      directory: `${__dirname}/seeds`
    },
    useNullAsDefault: true
  }

  // staging: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // },
  //
  // production: {
  //   client: "postgresql",
  //   connection: {
  //     database: "my_db",
  //     user: "username",
  //     password: "password"
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: "knex_migrations"
  //   }
  // }
};
