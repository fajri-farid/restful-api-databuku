const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Stores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // relasi disini
    static associate(models) {
      // define association here
      //   ex:
      //   Authors.hasMany(models.Books, { foreignKey: "authorId" });
      Stores.hasMany(models.Book_Store, { foreignKey: "store_id" });
    }
  }

  // name-table.init
  Stores.init(
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
    },
    {
      sequelize,
      modelName: "Stores", // nama model
    }
  );

  return Stores; // return <nama table>
};
