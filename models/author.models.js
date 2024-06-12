module.exports = (sequelize, Sequelize) => {
  const Authors = sequelize.define("authors", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bio: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    birthdate: {
      type: Sequelize.DATEONLY,
      allowNull: false,
    },
  });

  return Authors;
};
