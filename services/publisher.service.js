const db = require("../models/index");

async function create(data) {
  const role = await db.Publishers.create(data);
  return role;
}

async function getAll() {
  const roleList = await db.Publishers.findAll({
    include: db.publisherContacts, // Menggunakan objek model Books secara langsung
  });
  return roleList;
}

async function getById(id) {
  const role = await db.Publishers.findByPk(id, {
    include: db.publisherContacts, // Menggunakan objek model Books secara langsung
  });
  return role;
}

async function update(id, data) {
  const result = await db.Publishers.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Publishers.destroy({
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
