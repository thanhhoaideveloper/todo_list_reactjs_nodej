const todoRoute = require("./todo.route");

const MainRoute = (app) => {
  app.use("/todos", todoRoute);
};

module.exports = MainRoute;
