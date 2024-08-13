const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   ex:
      Roles.hasOne(models.Users, { foreignKey: "role_id" }); // one to one dengan users
      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  Roles.init(
    {
      id: {
        type: Sequelize.STRING,
        defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      role_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );

  return Roles;
};
