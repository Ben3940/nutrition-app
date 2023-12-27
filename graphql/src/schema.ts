export const typeDefs = `#graphql
    type Food {
        No: ID!
        name: String!
        serving_size: String!
        nutrition: Nutrition!
    }

    type Nutrition {
        No: ID!
        calories: String!
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
