const db = require("../models/index");

async function create(data) {
  const author = await db.Authors.create(data);
  return author;
}

async function getAll() {
  const authorsList = await db.Authors.findAll({
    include: db.Books, // Menggunakan objek model Books secara langsung
  });
  return authorsList;
}

async function getById(id) {
  const author = await db.Authors.findByPk(id, {
    include: db.Books, // Menggunakan objek model Books secara langsung
  });
  return author;
}

async function deleteById(id) {
  const result = await db.Authors.destroy({
    where: { id: id },
  });
  return result;
}

async function update(id, data) {
  const result = await db.Authors.update(data, {
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
