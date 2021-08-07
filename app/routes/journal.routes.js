const journal = require("../controllers/journal.controller.js");
var router = require("express").Router();

// retrieve all journals
router.get("/", journal.findAll);

// add journal
router.post("/add", journal.addJournal);

module.exports = router;
