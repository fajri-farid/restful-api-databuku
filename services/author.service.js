const db = require("../models/index");

async function create(data) {
  const author = await db.authors.create(data);
  return author;
}

async function getAll() {
  const authorsList = await db.authors.findAll({
    include: [
      {
        model: db.books,
        as: "books",
      },
    ],
  });
  return authorsList;
}

async function getById(id) {
  const author = await db.authors.findByPk(id, { include: ["books"] });
  return author;
}

async function deleteById(id) {
  const result = await db.authors.destroy({
    where: { id: id },
  });
  return result;
}

async function update(id, data) {
  const result = await db.authors.update(data, {
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
