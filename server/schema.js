const { gql } = require('apollo-server');

const typeDefs = gql`

  type MainCard {
      title: String!
      image: String!
  }

  type Book {
      id: ID!
      image: String!
      title: String!
      rating: Float!
      price: Float!
      review: String!
      description: String!
      pages: Int!
      slug: String!
      stock: Int!
      category: Category
  }

  type Category {
    id: ID!
    image: String!
    category: String!
    slug: String!
    books: [Book!]!
  }

  type Query {
    mainCards: [MainCard]
    books: [Book!]!
    book(slug: String!): Book
    categories: [Category!]!
    category(slug: String!): Category
  }

  type Mutation {
      addBook(
        id: ID!
        image: String!
        title: String!
        rating: Float!
        price: Float!
        review: String!
        description: String!
        pages: Int!
        slug: String!
        stock: Int!
        category: String!
      ): Book
      removeBook(id: ID!): Boolean!
  }

`;

module.exports = typeDefs