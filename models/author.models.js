module.exports = (sequelize, Sequelize) => {
  const Book = sequelize.define("book", {
    title: {
      type: Sequelize.STRING,
      allowNull: false, // Judul buku tidak boleh kosong
    },
    description: {
      type: Sequelize.TEXT,
    },
    published: {
      type: Sequelize.BOOLEAN,
      defaultValue: false, // Default buku belum terbit
    },
    author: {
      // Menambahkan kolom author
      type: Sequelize.STRING,
      allowNull: false, // Nama penulis tidak boleh kosong
    },
  });

  return Book;
};
