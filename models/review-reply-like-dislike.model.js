const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Review_Reply_Like_Dislikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // relasi disini
    static associate(models) {
      // define association here
      // ex:
      Review_Reply_Like_Dislikes.belongsTo(models.Users, {
        foreignKey: "user_id",
      });

      Review_Reply_Like_Dislikes.belongsTo(models.Review_Replies, {
        foreignKey: "review_reply_id",
      });
      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  // name-table.init
  Review_Reply_Like_Dislikes.init(
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
      review_reply_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Review_Replies",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Review_Reply_Like_Dislikes", // nama model
    }
  );

  return Review_Reply_Like_Dislikes; // return <nama table>
};
