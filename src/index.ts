import { ApolloServer, gql } from 'apollo-server';
import { connectToDb, initMongoClient } from './db';
require('dotenv').config();


const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      hello: String!
    }
  `,
  resolvers: {
    Query: {
      hello: () => 'Hey!',
    },
  },
});

function startServer(){
  server.listen().then(({ url }) => {
    // eslint-disable-next-line no-console
    console.log(`🚀 Server ready at ${url}`);
    connectToDb();
  });
}

initMongoClient(startServer);
