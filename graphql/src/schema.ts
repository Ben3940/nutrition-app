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
        nutritions: [Nutrition]
        food_id(table_name:String!, No: String!): [Food]
        nutrition_id(table_name:String!, No: String!): [Nutrition]
        food_names: [String]
        food_name(table_name:String!, name: String!): [Food]
    }

`;
