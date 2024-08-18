const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Book_Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   ex:
      // Book_Tags.hasOne(models.Tags, { foreignKey: "tag_id" });
      Book_Tags.belongsTo(models.Tags, { foreignKey: "tag_id" });
      Book_Tags.belongsTo(models.Books, { foreignKey: "book_id" });
      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  Book_Tags.init(
    {
      id: {
        type: Sequelize.STRING,
        defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      book_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Book",
          key: "id",
        },
      },
      tag_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Tags",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Book_Tags",
    }
  );

  return Book_Tags;
};
