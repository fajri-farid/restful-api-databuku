const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   ex:
      //   Roles.hasOne(models.Users, { foreignKey: "role_id" }); // one to one dengan users
      Tags.belongsToMany(models.Books, {
        through: "Book_Tags",
        foreignKey: "tag_id",
      });
    }
  }

  Tags.init(
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
      modelName: "Tags",
      hooks: {
        beforeCreate: (Tags) => {
          Tags.id = createId(); // Generate new ID before creating the record
        },
      },
    }
  );

  return Tags;
};
