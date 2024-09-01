const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class publisherContacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   ex:
      //   Roles.hasOne(models.Users, { foreignKey: "role_id" }); // one to one dengan users
      publisherContacts.hasOne(models.Publishers, { foreignKey: "contact_id" });
    }
  }

  publisherContacts.init(
    {
      id: {
        type: Sequelize.STRING,
        // defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      phone_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "publisherContacts",
      hooks: {
        beforeCreate: (publisherContacts) => {
          publisherContacts.id = createId(); // Generate new ID before creating the record
        },
      },
    }
  );

  return publisherContacts;
};
