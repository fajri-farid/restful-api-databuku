const db = require("../models/index");

async function create(data) {
  const price = await db.Prices.create(data);
  return price;
}

async function getAll() {
  const priceList = await db.Prices.findAll();
  return priceList;
}

async function getById(id) {
  const price = await db.Prices.findByPk(id);
  return price;
}

async function update(id, data) {
  const result = await db.Prices.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Prices.destroy({
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
