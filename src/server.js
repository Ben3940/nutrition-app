"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nutrition_tsx_1 = require("./data/nutrition.tsx");
var server_1 = require("@apollo/server");
var standalone_1 = require("@apollo/server/standalone");
var schema_ts_1 = require("./graphql/schema.ts");
var PORT = 4000;
var resolvers = {
    Query: {
        food: function () { return nutrition_tsx_1.data; },
    },
};
var server = new server_1.ApolloServer({
    typeDefs: schema_ts_1.typeDefs,
    resolvers: resolvers,
});
var url = (await (0, standalone_1.startStandaloneServer)(server, {
    listen: { port: PORT },
})).url;
console.log("Started Apollo server on port ".concat(PORT, " at ").concat(url));
