const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Author_Sosmed extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // relasi disini
    static associate(models) {
      // define association here
      //   ex:
      Author_Sosmed.hasMany(models.Authors, { foreignKey: "author_id" });
      Author_Sosmed.hasMany(models.Social_Media, {
        foreignKey: "sosial_media_id",
      });
      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  // name-table.init
  Author_Sosmed.init(
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
      author_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Authors",
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
      modelName: "Author_Sosmed", // nama model
    }
  );

  return Author_Sosmed; // return <nama table>
};
