const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Review_Like_Dislike extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // relasi disini
    static associate(models) {
      // define association here
      // ex:
      Review_Like_Dislike.belongsTo(models.Users, { foreignKey: "user_id" });

      Review_Like_Dislike.belongsTo(models.Reviews, {
        foreignKey: "review_id",
      });
      // Review_Like_Dislike.hasMany(models.Books, { foreignKey: "review_id" });
      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  // name-table.init
  Review_Like_Dislike.init(
    {
      id: {
        type: Sequelize.STRING,
        defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      is_like: {
        type: Sequelize.BOOLEAN,
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
      review_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Reviews",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Review_Like_Dislike", // nama model
    }
  );

  return Review_Like_Dislike; // return <nama table>
};
