import { ApolloServer, gql } from 'apollo-server';
import { initMongoClient } from './db';
import { getUser } from './resolvers/userResolver';
import { userSchema } from './typeDefs/userSchema';
require('dotenv').config();

const server = new ApolloServer({
  typeDefs: userSchema,
  resolvers: {
    Query: {
      user: (parent, args, context) => getUser(parent, args, context),
    },
  },
});

function startServer() {
  server.listen().then(({ url }) => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at ${url}`);
  });
}

initMongoClient(startServer);
