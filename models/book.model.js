const { createId } = require("@paralleldrive/cuid2");

module.exports = (sequelize, Sequelize) => {
  const Books = sequelize.define("books", {
    id: {
      type: Sequelize.STRING,
      defaultValue: createId(), // Menggunakan cuid sebagai default ID
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    synopsis: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    authorId: {
      type: Sequelize.STRING,
      allowNull: false,
      references: {
        model: "authors",
        key: "id",
      },
    },
  });

  Books.belongsTo(sequelize.models.authors, {
    foreignKey: "authorId",
    as: "author",
  });

  return Books;
};
