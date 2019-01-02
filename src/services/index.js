const graphql = require('./graphql/graphql.service.js');
const user = require('./user/user.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(graphql);
  app.configure(user);
};
