const db = require("../models");

const Journal = db.journals;

const Op = db.Sequelize.Op;

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
