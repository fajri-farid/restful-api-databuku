const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Prices extends Model {
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

      Prices.belongsTo(models.Currencies, { foreignKey: "currency_id" });

      // belongs to
      Prices.hasOne(models.Books, { foreignKey: "price_id" });
    }
  }

  // name-table.init
  Prices.init(
    {
      id: {
        type: Sequelize.STRING,
        // defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      currency_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Currencies",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Prices", // nama model
      hooks: {
        beforeCreate: (Prices) => {
          Prices.id = createId(); // Generate new ID before creating the record
        },
      },
    }
  );

  return Prices; // return <nama table>
};
