module.exports = (sequelize, Sequelize) => {
  const Journal = sequelize.define(
    "journal",
    {
      coffeebean: {
        type: Sequelize.STRING,
      },
      origin: {
        type: Sequelize.STRING,
      },
      process: {
        type: Sequelize.STRING,
      },
      roastdate: {
        type: Sequelize.DATEONLY,
      },
      brewingmethod: {
        type: Sequelize.STRING,
      },
      yield: {
        type: Sequelize.INTEGER,
      },
      notes: {
        type: Sequelize.STRING,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
    },
    {
      timestamps: false,
    }
  );

  return Journal;
};
