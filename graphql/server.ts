import { data } from './data/nutrition.tsx';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.ts';

const PORT: number = 4000;

const resolvers = {
  Query: {
    food: () => data,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: PORT },
});

console.log(`Started Apollo server on port ${PORT} at ${url}`);
