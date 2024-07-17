const db = require("../models/index");

async function create(data) {
  const book = await db.books.create(data);
  return book;
}

async function getAll() {
  const booksList = await db.books.findAll({ include: ["author"] });
  return booksList;
}

async function getById(id) {
  const book = await db.books.findByPk(id, { include: ["author"] });
  return book;
}

async function update(id, data) {
  const result = await db.books.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.books.destroy({
    where: { id: id },
  });
  return result;
}

module.exports = {
  create,
  getAll,
  getById,
  update,
  deleteById,
};
