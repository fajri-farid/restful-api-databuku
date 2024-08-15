const db = require("../models/index");

async function create(data) {
  const Currencies = await db.Currencies.create(data);
  return Currencies;
}

async function getAll() {
  const CurrenciesList = await db.Currencies.findAll();
  return CurrenciesList;
}

async function getById(id) {
  const Currencies = await db.Currencies.findByPk(id);
  return Currencies;
}

async function update(id, data) {
  const result = await db.Currencies.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Currencies.destroy({
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
