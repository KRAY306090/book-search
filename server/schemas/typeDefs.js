const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input saveArr {
        authors: [String!]
        description: String!
        title: String!
        bookId: String!
        image: String!
        link: String!
    }

    type Book {
        bookId: String!
        authors: [String!]
        description: String!
        title: String!
        image: String!
        link: String!
    }

    type User {
        _id: ID!
        username: String!
        email: String!
        bookCount: Int!
        savedBooks: [Book]
    }

    type Auth {
        user: User
        token: ID!
    }

    type Query {
        me: User
    }

    type Mutation {
        login: Auth
        addUser: Auth
        addBook(input: saveArr): User
        removeBook(id: ID!):  User
    }
`;

module.exports = typeDefs;