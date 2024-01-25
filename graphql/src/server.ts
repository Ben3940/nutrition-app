import { data } from './data/nutrition.js';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema.js';
import { Controller } from './db_controller.js';
import { food } from './types/food.js';
import { nutrition } from './types/nutrition.js';

const PORT: number = 4000;
const db = new Controller();

const resolvers = {
  Query: {
    foods() {
      return db.get_entire_table('food');
    },
    nutritions() {
      return db.get_entire_table('nutrition');
    },
    food_id(parent, args) {
      return [db.get_by_No(args.table_name, args.No)];
    },
    nutrition_id(parent, args) {
      return [db.get_by_No(args.table_name, args.No)];
    },
    food_names(): Array<Partial<food['name']>> {
      return db.get_food_names().map((obj: Pick<food, 'name'>): string => {
        return obj.name;
      });
    },
    food_name(parent, args) {
      return [db.get_by_name(args.table_name, args.name)];
    },
  },
  Food: {
    nutrition(parent, args) {
      return db.get_by_No('nutrition', parent.No);
    },
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
