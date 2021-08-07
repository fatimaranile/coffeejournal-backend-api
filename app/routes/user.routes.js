const coffeejournal = require("../controllers/user.controller.js");
var router = require("express").Router();

// create new user
router.post("/signup", coffeejournal.create);
// retrieve all users
router.get("/", coffeejournal.findAll);
// login user
router.post("/login", coffeejournal.login);
// update user
router.put("/:id", coffeejournal.update);
// delete user
router.delete("/:id", coffeejournal.delete);

module.exports = router;
