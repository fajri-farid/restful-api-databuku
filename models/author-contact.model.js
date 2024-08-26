const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Author_Contacts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //   ex:
      Author_Contacts.hasOne(models.Authors, { foreignKey: "contact_id" }); // one to one dengan users
      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  Author_Contacts.init(
    {
      id: {
        type: Sequelize.STRING,
        // defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      phone_number: {
        type: Sequelize.STRING,
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
      modelName: "Author_Contacts",
      hooks: {
        beforeCreate: (Author_Contacts) => {
          Author_Contacts.id = createId(); // Generate new ID before creating the record
        },
      },
    }
  );

  return Author_Contacts;
};
