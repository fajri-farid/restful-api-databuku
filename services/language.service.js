const db = require("../models/index");

async function create(data) {
  const language = await db.Languages.create(data);
  return language;
}

async function getAll() {
  const languageList = await db.Languages.findAll();
  return languageList;
}

async function getById(id) {
  const language = await db.Languages.findByPk(id);
  return language;
}

async function update(id, data) {
  const result = await db.Languages.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Languages.destroy({
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
