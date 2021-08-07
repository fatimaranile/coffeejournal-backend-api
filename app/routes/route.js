module.exports = (app) => {
  const userRoute = require("./user.routes");

  app.use("/coffeejournal/user", userRoute);
};
