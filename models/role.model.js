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
      Roles.hasMany(models.Users, { foreignKey: "role_id" });
      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  Roles.init(
    {
      id: {
        type: Sequelize.STRING,
        // defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      role_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Roles",
      hooks: {
        beforeCreate: (role) => {
          role.id = createId(); // Generate new ID before creating the record
        },
      },
    }
  );

  return Roles;
};
