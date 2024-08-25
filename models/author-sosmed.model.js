const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  // class nama-table
  class Author_Sosmeds extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // relasi disini
    static associate(models) {
      // define association here
      //   ex:
      Author_Sosmeds.belongsTo(models.Authors, { foreignKey: "author_id" });

      Author_Sosmeds.belongsTo(models.Social_Media, {
        foreignKey: "sosial_media_id",
      });
      //   Books.belongsTo(models.Authors, { foreignKey: "authorId" });
    }
  }

  // name-table.init
  Author_Sosmeds.init(
    {
      id: {
        type: Sequelize.STRING,
        // defaultValue: createId(), // Menggunakan cuid sebagai default ID
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
      hooks: {
        beforeCreate: (Author_Sosmed) => {
          Author_Sosmed.id = createId(); // Generate new ID before creating the record
        },
      },
    }
  );

  return Author_Sosmeds; // return <nama table>
};
