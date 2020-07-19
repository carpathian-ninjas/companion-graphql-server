const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const typeDefs = importSchema('../schema.graphql')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers
})

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
