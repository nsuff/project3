const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type user {
        _id: ID
        username: String
        email: String
        recipes: [Recipe]
    }

    type Recipe {
        _id: ID
        recipeText: String
        description: String
        createdAt: String
        username: String
        directions: String
        ingredients: [Ingredient]
    }

    type Ingredient {
        _id: ID
        ingredientBody
    }

    type Query {
        users: [User]
        recipes: [Recipe]
    }
`;

module.exports = typeDefs;