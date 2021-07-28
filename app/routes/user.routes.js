module.exports = (app) => {
  const users = require("../controllers/user.controller.js");
  var router = require("express").Router();

  // create new user
  router.post("/", users.create);
  // retrieve all users
  router.get("/", users.findAll);
  // login user
  router.post("/login", users.login);
  // update user
  router.put("/:id", users.update);
  // delete user
  router.delete("/:id", users.delete);

  app.use("/coffeejournal/users", router);
};
