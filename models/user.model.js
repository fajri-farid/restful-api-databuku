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
      Users.belongsTo(models.Roles, { foreignKey: "role_id" }); // one to one dengan roles
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
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      role_id: {
        type: Sequelize.STRING,
        allowNull: false,
        // reference table
        references: {
          model: "Roles", // Nama model yang menjadi referensi
          key: "id", // Nama kolom pada model yang menjadi referensi
        },
        defaultValue: "abcdefg", // ! nanti diganti klw sudah dapat cuid2 dari role guest
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );

  return Users;
};
