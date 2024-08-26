const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Review_Replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // relasi disini
    static associate(models) {
      // define association here
      //   ex:
      Review_Replies.hasMany(models.Review_Reply_Like_Dislike, {
        foreignKey: "review_reply_id",
      });

      // belongs to
      Review_Replies.belongsTo(models.Users, { foreignKey: "user_id" });

      Review_Replies.belongsTo(models.Reviews, { foreignKey: "review_id" });
    }
  }

  // name-table.init
  Review_Replies.init(
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
      modelName: "Review_Replies", // nama model
    }
  );

  return Review_Replies; // return <nama table>
};
