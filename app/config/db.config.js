// .gitignore actual values.
module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "password",
  DB: "coffee_journal_db",
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
