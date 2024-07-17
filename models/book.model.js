module.exports = (sequelize, Sequelize) => {
  const Books = sequelize.define("books", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
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
      type: Sequelize.INTEGER,
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
