const db = require("../models/index");

async function create(data) {
  const tag = await db.Tags.create(data);
  return tag;
}

async function getAll() {
  const tagList = await db.Tags.findAll();
  return tagList;
}

async function getById(id) {
  const tag = await db.Tags.findByPk(id);
  return tag;
}

async function update(id, data) {
  const result = await db.Tags.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Tags.destroy({
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
