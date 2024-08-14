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

      Prices.hasOne(models.Currency, { foreignKey: "currency_id" });

      // belongs to
      Prices.belongsTo(models.Books, { foreignKey: "price_id" });
    
    }
  }

  // name-table.init
  Prices.init(
    {
      id: {
        type: Sequelize.STRING,
        defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      additional_info: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      currency_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Currency",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Prices", // nama model
    }
  );

  return Prices; // return <nama table>
};
