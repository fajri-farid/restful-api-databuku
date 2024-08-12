const { createId } = require("@paralleldrive/cuid2");

module.exports = (sequelize, Sequelize) => {
  const Authors = sequelize.define("authors", {
    id: {
      type: Sequelize.INTEGER,
      defaultValue: createId, // Menggunakan cuid sebagai default ID
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

  Authors.associate = (models) => {
    Authors.hasMany(models.books, {
      foreignKey: "authorId",
      as: "books",
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return Authors;
};
