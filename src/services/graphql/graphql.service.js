// Initializes the `graphql` service on path `/graphql`
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

module.exports = function (app) {
  const schema = buildSchema(`
    type Query {
      hello: String
    }
  `);
  const rootValue = {
    hello: () => {
      return 'Hello world!';
    },
  };
  // Initialize our service with any options it requires
  app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  }));
};
