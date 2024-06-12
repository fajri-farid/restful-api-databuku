const dbConfig = require("./config"); // Memuat konfigurasi database
const Sequelize = require("sequelize"); // Memuat library Sequelize

// Membuat koneksi ke database
const sequelize = new Sequelize(
  dbConfig.DB, // Nama database
  dbConfig.USER, // Nama pengguna database
  dbConfig.PASSWORD, // Kata sandi database
  {
    host: dbConfig.HOST, // Host database
    dialect: dbConfig.dialect, // Dialek database (misalnya 'mysql', 'postgres', dll.)
    operatorAliases: false, // Menonaktifkan operator alias (opsional)
    pool: {
      // Pengaturan koneksi pool
      max: dbConfig.pool.max, // Jumlah maksimum koneksi
      min: dbConfig.pool.min, // Jumlah minimum koneksi
      acquire: dbConfig.pool.acquire, // Waktu maksimum untuk mendapatkan koneksi baru (ms)
      idle: dbConfig.pool.idle, // Waktu maksimum koneksi menganggur sebelum ditutup (ms)
    },
  }
);

// Membuat objek 'db' untuk menyimpan koneksi dan model
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Memuat model Author dan mengaitkannya dengan koneksi Sequelize
db.authors = require("../../models/author.models")(sequelize, Sequelize);

module.exports = db; // Mengekspor objek 'db' agar bisa digunakan di tempat lain
