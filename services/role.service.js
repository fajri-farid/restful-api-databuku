const db = require("../models/index");

async function create(data) {
  const role = await db.Roles.create(data);
  return role;
}

async function getAll() {
  const roleList = await db.Roles.findAll();
  return roleList;
}

async function getById(id) {
  const role = await db.Roles.findByPk(id);
  return role;
}

async function update(id, data) {
  const result = await db.Roles.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Roles.destroy({
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
