const { createId } = require("@paralleldrive/cuid2");
const { Model } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  class Authors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Authors.hasMany(models.Books, { foreignKey: "authorId" });

      // belongs to
      Authors.belongsTo(models.Author_Contacts, { foreignKey: "contact_id" });

      Authors.belongsToMany(models.Books, {
        through: "Author_Books",
        foreignKey: "author_id",
      });

      Authors.belongsToMany(models.Social_Media, {
        through: "Author_Sosmeds",
        foreignKey: "author_id",
      });
    }
  }

  Authors.init(
    {
      id: {
        type: Sequelize.STRING,
        // defaultValue: createId(), // Menggunakan cuid sebagai default ID
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
      birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      contact_id: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: "Author_Contacts",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Authors",
      hooks: {
        beforeCreate: (Authors) => {
          Authors.id = createId(); // Generate new ID before creating the record
        },
      },
    }
  );

  return Authors;
};
