const cors = require('cors');
const gql = require('graphql-tag');
const { readFileSync } = require('fs');
const http = require('http');
const  { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone')

async function startServer() {
  const resolvers = require('./src/resolvers.ts');
  const typeDefs = gql(
    readFileSync('./src/typeDefs.graphql', {
      encoding: 'utf-8',
    }),
  );

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  const { url } = await startStandaloneServer(server, {
    context: async ({ req }: any) => ({ token: req.headers.token }),
    listen: { port: 5000 },
  });
  console.log(`🚀  Server ready at ${url}`);
}

startServer();
