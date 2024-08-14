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
      // Books.belongsTo(models.Authors, { foreignKey: "authorId" });
      Books.hasOne(models.Prices, { foreignKey: "price_id" });
      Books.hasOne(models.Publisher, { foreignKey: "publisher_id" });

      // belongsto
      Books.belongsTo(models.Book_Language, { foreignKey: "book_id" });
      Books.belongsTo(models.Author_Books, { foreignKey: "book_id" });
      Books.belongsTo(models.Book_Tags, { foreignKey: "book_id" });
      Books.belongsTo(models.Author_Books, { foreignKey: "book_id" });
      Books.belongsTo(models.Reviews, { foreignKey: "book_id" });
      Books.belongsTo(models.Book_Store, { foreignKey: "book_id" });
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
          model: "Publisher",
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
