const db = require("../models/index");

async function create(data) {
  const bookLanguage = await db.Book_Language.create(data);
  return bookLanguage;
}

async function getAll() {
  const bookLanguageList = await db.Book_Language.findAll();
  return bookLanguageList;
}

async function getById(id) {
  const bookLanguage = await db.Book_Language.findByPk(id);
  return bookLanguage;
}

async function update(id, data) {
  const result = await db.Book_Language.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Book_Language.destroy({
    where: { id: id },
  });
  return result;
}

module.exports = {
  create,
  getAll,
  update,
  deleteById,
  getById,
};
