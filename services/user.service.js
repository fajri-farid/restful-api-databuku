const db = require("../models/index");

async function create(data) {
  const user = await db.Users.create(data);
  return user;
}

async function getAll() {
  const userList = await db.Users.findAll();
  return userList;
}

async function getByEmail(email) {
  const user = await db.Users.findOne({ where: { email } });
  return user;
}

async function getById(id) {
  const user = await db.Users.findByPk(id);
  return user;
}

async function update(id, data) {
  const result = await db.Users.update(data, {
    where: { id: id },
  });
  return result[0];
}

async function deleteById(id) {
  const result = await db.Users.destroy({
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
  getByEmail,
};
