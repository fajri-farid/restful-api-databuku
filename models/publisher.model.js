const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Publishers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   ex:
      Publishers.belongsTo(models.publisherContacts, {
        foreignKey: "contact_id",
      });

      // belongs to
      Publishers.hasMany(models.Books, { foreignKey: "publisher_id" });

      Publishers.hasMany(models.Publisher_Sosmed, {
        foreignKey: "publisher_id",
      });
    }
  }

  Publishers.init(
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
      bio: {
        type: Sequelize.TEXT,
        allowNull: true,
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
      modelName: "Publishers",
    }
  );

  return Publishers;
};
