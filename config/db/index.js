// const dbConfig = require("./config");
// const Sequelize = require("sequelize");

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorAliases: false,
//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

// const db = {};
// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.authors = require("../../models/author.models")(sequelize, Sequelize);
// db.books = require("../../models/book.models")(sequelize, Sequelize);

// (async () => {
//   await sequelize.sync();
// })();

// module.exports = db;
