const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Book_Language extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   ex:
      // Roles.hasOne(models.Users, { foreignKey: "role_id" }); // one to one dengan users
      Book_Language.belongsTo(models.Books, { foreignKey: "book_id" });
      Book_Language.belongsTo(models.Languages, { foreignKey: "language_id" });
      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  Book_Language.init(
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
          model: "Books",
          key: "id",
        },
      },
      language_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Languages",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Book_Language",
    }
  );

  return Book_Language;
};
