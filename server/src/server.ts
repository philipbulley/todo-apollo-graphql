import { ApolloServer } from 'apollo-server';
import schema from './schema';

const knex = require('knex')(
  require('./db/knexfile')[process?.env?.NODE_ENV ?? 'development']
);

async function server() {
  const context = {};

  const server = new ApolloServer({
    schema: await schema(),
    context,
    introspection: true,
    playground: true
  });

  if (process.env.NODE_ENV === 'test') {
    console.info('🗄 Test mode: Running migrations');
    await knex.migrate.latest();
    console.info('🗄 Test mode: Running seeds');
    await knex.seed.run();
  }

  const lists = await knex('lists')
    .select('*')
    .catch((e: any) => console.error(e));
  console.log('🗄 Found lists?:', lists?.length);
  const items = await knex('items')
    .select('*')
    .catch((e: any) => console.error(e));
  console.info('🗄 Found items?:', items?.length);

  const { url } = await server.listen();
  console.info(`🚀  Server ready at ${url}`);
}

export default server;
