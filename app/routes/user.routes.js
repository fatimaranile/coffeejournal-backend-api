module.exports = (app) => {
  const coffeejournal = require("../controllers/controller.js");
  var router = require("express").Router();

  // create new user
  router.post("/", coffeejournal.create);
  // retrieve all users
  router.get("/", coffeejournal.findAll);
  // login user
  router.post("/login", coffeejournal.login);
  // update user
  router.put("/:id", coffeejournal.update);
  // delete user
  router.delete("/:id", coffeejournal.delete);

  app.use("/coffeejournal/user", router);
};
