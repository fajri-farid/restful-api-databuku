const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Publisher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   ex:
      Publisher.belongsTo(models.publisherContacts, {
        foreignKey: "contact_id",
      });

      // belongs to
      Publisher.hasOne(models.Books, { foreignKey: "publisher_id" });

      Publisher.belongsTo(models.Publisher_Sosmed, {
        foreignKey: "publisher_id",
      });
    }
  }

  Publisher.init(
    {
      id: {
        type: Sequelize.STRING,
        defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      contact_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "publisherContacts",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Publisher",
    }
  );

  return Publisher;
};
