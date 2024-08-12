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
      Books.belongsTo(models.Authors, { foreignKey: "authorId" });
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
      authorId: {
        type: Sequelize.STRING,
        allowNull: false,
        // references: {
        //   model: "Authors",
        //   key: "id",
        // },
      },
    },
    {
      sequelize,
      modelName: "Books",
    }
  );

  return Books;
};
