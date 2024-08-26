const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   ex:
      //   Authors.hasMany(models.Books, { foreignKey: "authorId" });
      Users.hasMany(models.Reviews, { foreignKey: "user_id" });
      Users.hasMany(models.Review_Replies, { foreignKey: "user_id" });
      Users.hasMany(models.Review_Like_Dislikes, { foreignKey: "user_id" });
      Users.hasMany(models.Review_Reply_Like_Dislikes, {
        foreignKey: "user_id",
      });

      // belongs to
      Users.belongsTo(models.Roles, { foreignKey: "role_id" });
    }
  }

  Users.init(
    {
      id: {
        type: Sequelize.STRING,
        defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bio: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      birth_date: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      address: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      profile_pic: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Roles",
          key: "id",
        },
        defaultValue: "cybyqqzobgiueym5vmbng2w2",
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

  return Users;
};
