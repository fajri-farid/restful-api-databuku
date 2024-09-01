const db = require("../models/index");

async function create(data) {
  const authorBooks = await db.Author_Books.create(data);
  return authorBooks;
}

async function getAll() {
  const authorBookssList = await db.Author_Books.findAll({
    include: [
      {
        model: db.Authors,
      },
      {
        model: db.Books,
      },
    ], // Menggunakan objek model Books secara langsung
  });
  return authorBookssList;
}

async function getById(id) {
  const authorBooks = await db.Author_Books.findByPk(id, {
    include: [
      {
        model: db.Authors,
      },
      {
        model: db.Books,
      },
    ], // Menggunakan objek model Books secara langsung
  });
  return authorBooks;
}

async function deleteById(id) {
  const result = await db.Author_Books.destroy({
    where: { id: id },
  });
  return result;
}

async function update(id, data) {
  const result = await db.Author_Books.update(data, {
    where: { id: id },
  });
  return result[0];
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  update,
};
