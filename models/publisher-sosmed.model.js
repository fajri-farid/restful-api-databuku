const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Publisher_Sosmed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // relasi disini
    static associate(models) {
      // define association here
      //   ex:
      Publisher_Sosmed.belongsTo(models.Publishers, {
        foreignKey: "publisher_id",
      });

      Publisher_Sosmed.belongsTo(models.Social_Media, {
        foreignKey: "sosial_media_id",
      });

      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  // name-table.init
  Publisher_Sosmed.init(
    {
      id: {
        type: Sequelize.STRING,
        defaultValue: createId(), // Menggunakan cuid sebagai default ID
        primaryKey: true,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      publisher_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Publishers",
          key: "id",
        },
      },
      sosial_media_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Social_Media",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Publisher_Sosmed", // nama model
    }
  );

  return Publisher_Sosmed; // return <nama table>
};
