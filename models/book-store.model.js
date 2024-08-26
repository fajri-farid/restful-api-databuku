const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Book_Stores extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // relasi disini
    static associate(models) {
      // define association here
      //   ex:
      Book_Stores.belongsTo(models.Books, { foreignKey: "book_id" });
      Book_Stores.belongsTo(models.Stores, { foreignKey: "store_id" });
    }
  }

  // name-table.init
  Book_Stores.init(
    {
      id: {
        type: Sequelize.STRING,
        // defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      book_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Books",
          key: "id",
        },
      },
      store_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Stores",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Book_Stores", // nama model
      hooks: {
        beforeCreate: (Book_Stores) => {
          Book_Stores.id = createId(); // Generate new ID before creating the record
        },
      },
    }
  );

  return Book_Stores; // return <nama table>
};
