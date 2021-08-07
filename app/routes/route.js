module.exports = (app) => {
  const userRoute = require("./user.routes.js");
  const journalRoute = require("./journal.routes.js");

  app.use("/coffeejournal/user", userRoute);
  app.use("/coffeejournal/journal", journalRoute);
};
