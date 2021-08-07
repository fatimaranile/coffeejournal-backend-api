const user = require("../controllers/user.controller.js");
var router = require("express").Router();

// create new user
router.post("/signup", user.create);
// retrieve all users
router.get("/", user.findAll);
// login user
router.post("/login", user.login);
// update user
router.put("/:id", user.update);
// delete user
router.delete("/:id", user.delete);

module.exports = router;
