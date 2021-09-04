const { ApolloServer } = require('apollo-server');
const { mainCards, books, categories } = require('./db')
const typeDefs = require('./schema')
const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const Book = require("./resolvers/Book")
const Category = require("./resolvers/Category")

  const server = new ApolloServer({ 
    typeDefs, 
    resolvers: {
      Query,
      Mutation,
      Book,
      Category
    },
    context: {
      mainCards,
      books,
      categories
    }
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });