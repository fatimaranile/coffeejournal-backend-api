module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();

  // create new user
  router.post("/", users.create);
  // retrieve all users
  router.get("/", users.findAll);

  app.use("/coffeejournal/users", router);
};
