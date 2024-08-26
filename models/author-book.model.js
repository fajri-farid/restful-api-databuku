const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Author_Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Author_Books.belongsTo(models.Authors, { foreignKey: "author_id" });
      Author_Books.belongsTo(models.Books, { foreignKey: "book_id" });
    }
  }

  Author_Books.init(
    {
      id: {
        type: Sequelize.STRING,
        // defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      author_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Authors",
          key: "id",
        },
      },
      book_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Books",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Author_Books",
      hooks: {
        beforeCreate: (Author_Books) => {
          Author_Books.id = createId(); // Generate new ID before creating the record
        },
      },
    }
  );

  return Author_Books;
};
