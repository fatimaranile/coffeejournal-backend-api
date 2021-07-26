const dbConfiguration = require("../config/db.config.js");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfiguration.DB,
  dbConfiguration.USER,
  dbConfiguration.PASSWORD,
  {
    host: dbConfiguration.HOST,
    dialect: dbConfiguration.dialect,
    operatorAliases: false,

    pool: {
      max: dbConfiguration.pool.max,
      min: dbConfiguration.pool.min,
      acquire: dbConfiguration.pool.acquire,
      idle: dbConfiguration.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.coffeejournals = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;
