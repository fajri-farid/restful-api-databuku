const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Books.belongsTo(models.Authors, { foreignKey: "authorId" });\
      // Books.hasMany(models.Author_Books, { foreignKey: "book_id" });
      Books.hasOne(models.Book_Tags, { foreignKey: "book_id" });
      Books.hasMany(models.Reviews, { foreignKey: "book_id" });
      Books.hasMany(models.Book_Store, { foreignKey: "book_id" });

      // belongsto
      Books.belongsTo(models.Prices, { foreignKey: "price_id" });
      Books.belongsTo(models.Publishers, { foreignKey: "publisher_id" });

      Books.belongsToMany(models.Authors, {
        through: "Author_Books",
        foreignKey: "book_id",
      });
      Books.belongsToMany(models.Languages, {
        through: "Book_Language",
        foreignKey: "book_id",
      });
    }
  }

  Books.init(
    {
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
      publisher_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Publishers",
          key: "id",
        },
      },
      price_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Prices",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Books",
    }
  );

  return Books;
};
