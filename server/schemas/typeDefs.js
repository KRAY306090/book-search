const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input saveArr {
        authors: [String]
        description: String!
        title: String!
        bookId: String!
        image: String
        link: String
    }

    type Book {
        bookId: ID!
        authors: [String]
        description: String
        title: String!
        image: String
        link: String
    }

    type User {
        _id: ID!
        username: String!
        email: String
        bookCount: Int
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
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addBook(bookData: saveArr!): User
        removeBook(bookId: ID!):  User
    }
`;

module.exports = typeDefs;