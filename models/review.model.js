const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Reviews extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // relasi disini
    static associate(models) {
      // define association here
      // ex:
      Reviews.belongsTo(models.Users, { foreignKey: "user_id" });
      Reviews.belongsTo(models.Books, { foreignKey: "book_id" });

      // belongs to
      Reviews.hasMany(models.Review_Replies, { foreignKey: "review_id" });

      Reviews.hasMany(models.Review_Like_Dislikes, {
        foreignKey: "review_id",
      });
    }
  }

  // name-table.init
  Reviews.init(
    {
      id: {
        type: Sequelize.STRING,
        defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      comment: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rating: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Users",
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
      modelName: "Reviews", // nama model
    }
  );

  return Reviews; // return <nama table>
};
