import { ApolloServer } from 'apollo-server';
import schema from './schema';

async function server() {
  const context = {};

  const server = new ApolloServer({
    schema: await schema(),
    context,
    introspection: true,
    playground: true,
  });

  const {url} = await server.listen();
  console.log(`🚀  Server ready at ${url}`);
}

export default server;