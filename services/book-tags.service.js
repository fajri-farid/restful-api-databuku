const db = require("../models/index");

async function create(data) {
  const book_tag = await db.Book_Tags.create(data);
  return book_tag;
}

async function getAll() {
  const bookTagsList = await db.Book_Tags.findAll({
    include: [
      {
        model: db.Books,
      },
      {
        model: db.Tags,
      },
    ],
  });
  return bookTagsList;
}

async function getById(id) {
  const book_tag = await db.Book_Tags.findByPk(id, {
    include: [
      {
        model: db.Books,
      },
      {
        model: db.Tags,
      },
    ],
  });
  return book_tag;
}

async function update(id, data) {
  const result = await db.Book_Tags.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Book_Tags.destroy({
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
