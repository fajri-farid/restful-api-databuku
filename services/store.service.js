const db = require("../models/index");

async function create(data) {
  const store = await db.Stores.create(data);
  return store;
}

async function getAll() {
  const storeList = await db.Stores.findAll();
  return storeList;
}

async function getById(id) {
  const store = await db.Stores.findByPk(id);
  return store;
}

async function update(id, data) {
  const result = await db.Stores.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Stores.destroy({
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
