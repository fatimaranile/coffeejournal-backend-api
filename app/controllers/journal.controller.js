const db = require("../models");

const Journal = db.journals;

const Op = db.Sequelize.Op;

exports.addJournal = (req, res) => {
  // validate request
  const {
    coffeebean,
    origin,
    process,
    roastdate,
    brewingmethod,
    yield,
    notes,
    rate,
    userId,
  } = req.body;
  if (!coffeebean || !userId) {
    res.status(400).send({
      message: "Coffee bean and user ID cannot be empty!",
    });

    return;
  }

  const journal = {
    coffeebean,
    origin,
    process,
    roastdate,
    brewingmethod,
    yield,
    notes,
    rate,
    userId,
  };

  Journal.create(journal)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while adding your journal.",
      });
    });
};

exports.findAll = (req, res) => {
  Journal.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "An error occured while retrieving all journals.",
      });
    });
};
