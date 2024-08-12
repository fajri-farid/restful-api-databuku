const db = require("../models/index");

async function create(data) {
  const book = await db.Books.create(data);
  return book;
}

async function getAll() {
  const booksList = await db.Books.findAll({ include: ["Authors"] });
  return booksList;
}

async function getById(id) {
  const book = await db.Books.findByPk(id, { include: ["Authors"] });
  return book;
}

async function update(id, data) {
  const result = await db.Books.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Books.destroy({
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
