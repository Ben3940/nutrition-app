export const typeDefs = `#graphql
    type Food {
        no: ID!
        name: String!
        serving_size: String!
        nutrition: Nutrition!
    }

    type Nutrition {
        no: ID!
        calories: Int!
        total_fat: String!
        cholesterol: String!
        sodium: String!
        protein: String!
        sugars: String!
    }

    type Query {
        foods: [Food]
    }

`;
