const db = require("../models");

const User = db.users;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  // validate request
  if (!req.body.username || !req.body.password || !req.body.email) {
    res.status(400).send({
      message: "Username, password or email cannot be empty!",
    });

    return;
  }

  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    bio: req.body.bio || "",
  };

  User.create(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while creating your account.",
      });
    });
};

exports.findAll = (req, res) => {
  const { email } = req.query;
  var condition = email ? { email: { [Op.like]: `%${email}%` } } : null;

  User.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "An error occured while retrieving all users.",
      });
    });
};

exports.findOne = (req, res) => {};

exports.update = (req, res) => {};
