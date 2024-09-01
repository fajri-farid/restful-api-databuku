const db = require("../models/index");

async function create(data) {
  const bookStores = await db.Book_Stores.create(data);
  return bookStores;
}

async function getAll() {
  const bookStoressList = await db.Book_Stores.findAll({
    include: [
      {
        model: db.Books,
      },
      {
        model: db.Stores,
      },
    ], // Menggunakan objek model Books secara langsung
  });
  return bookStoressList;
}

async function getById(id) {
  const bookStores = await db.Book_Stores.findByPk(id, {
    include: [
      {
        model: db.Books,
      },
      {
        model: db.Stores,
      },
    ], // Menggunakan objek model Books secara langsung
  });
  return bookStores;
}

async function deleteById(id) {
  const result = await db.Book_Stores.destroy({
    where: { id: id },
  });
  return result;
}

async function update(id, data) {
  const result = await db.Book_Stores.update(data, {
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
