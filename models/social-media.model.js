const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Social_Media extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   ex:
      //   Roles.hasOne(models.Users, { foreignKey: "role_id" }); // one to one dengan users

      // belongs to
      Social_Media.belongsToMany(models.Authors, {
        through: "Author_Sosmeds",
        foreignKey: "sosial_media_id",
      });

      Social_Media.belongsToMany(models.Publishers, {
        through: "Publisher_Sosmeds",
        foreignKey: "sosial_media_id",
      });
    }
  }

  Social_Media.init(
    {
      id: {
        type: Sequelize.STRING,
        // defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Social_Media",
      hooks: {
        beforeCreate: (role) => {
          role.id = createId(); // Generate new ID before creating the record
        },
      },
    }
  );

  return Social_Media;
};
