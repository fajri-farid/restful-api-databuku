const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Book_Store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // relasi disini
    static associate(models) {
      // define association here
      //   ex:
      Book_Store.belongsTo(models.Books, { foreignKey: "book_id" });

      Book_Store.belongsTo(models.Stores, { foreignKey: "store_id" });
      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  // name-table.init
  Book_Store.init(
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
      store_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Stores",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Book_Store", // nama model
    }
  );

  return Book_Store; // return <nama table>
};
